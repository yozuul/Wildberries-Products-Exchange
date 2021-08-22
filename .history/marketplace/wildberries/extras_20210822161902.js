import {} from 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'
import { WildberriesAPI } from '../../api/wildberries'
import { Fetch } from '../../utils'

class WildberriesExtras {
  constructor(parseResult) {
     this.parseResult = parseResult
     this.apiPath = 'https://suppliers-api.wildberries.ru'
  }

  async cardData() {
     const data = this.parseResult
     const uuidGen = uuidv4()

     const directory = await this.getDirectoryList(data.cardProductName)
     const tnved = await this.getTnvedList(data.cardProductName)

     const extras = {
        direcoryList: directory.data,
        tnvedList: tnved.data,
        barcode: await this.getBarCode(uuidGen),
        uuid: uuidGen,
        supplierVendorCode: process.env.SUPLIER_VENDOR_CODE
     }

     return extras
  }

  async getTnvedList(pattern) {
    let encode = encodeURI(pattern)
    const url = `${this.apiPath}/api/v1/directory/tnved?subject=${encode}`
    const fetch = new Fetch(url, process.env.WD_TOKEN)
    const request = await fetch.getData()
    return request.data
  }

  async getDirectoryList(pattern) {
    let lang = 'ru'
    let encode = encodeURI(pattern)

    const cyrillicPattern = /^\p{Script=Cyrillic}+$/u
    if(!cyrillicPattern.test(pattern.split(' ')[0])) {
      lang = 'en'
      encode = pattern
    }

    const url = `${this.apiPath}/api/v1/config/get/object/list?pattern=${encode}&lang=${lang}`
    const fetch = new Fetch(url)
    const request = await fetch.getData()
    return request.data
  }

  async getBarCode(uuid) {
    const url = `${this.apiPath}/card/getBarcodes`
    const data = {
      id: uuid,
      params: { quantity: 1 }
    }
    const fetch = new Fetch(url)
    const result = await fetch.postData(data)
    return result.data.result.barcodes[0]
  }
}

export { WildberriesExtras }