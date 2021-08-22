import {} from 'dotenv/config'
import axios from 'axios'

import { uuid } from '../../utils'

class WildberriesAPI {
   constructor(data) {
      this.data = data
   }
   test(data) {
      this.createCard(data)
   }



   async createCard(data) {
      console.log();
      const api = {
         createCard: 'https://suppliers-api.wildberries.ru/card/create',
         getCard: 'https://suppliers-api.wildberries.ru/card/cardByImtID'
      }

     this.axios({
         "id": "611e16ca887df247d4109658b",
         "jsonrpc": "2.0",
         "params": {
             // Идентификатор карточки. Можно получить методом "List", который рассмотрен ниже.
             "imtID": 0
         }
 }).get(api.getCard)
      // await this.axios(test()).post(api.getCard)
      // this.axios(test()).post(api.createCard)
   }

   axios(data) {
      console.log(data);
      const str = JSON.stringify(data)
      return {
         post: async (url) => {
            try {
               const response = await axios.post(url, str, {
                  headers: {
                     Authorization: `Bearer ${process.env.WD_TOKEN}`,
                     'Content-Type': 'application/json',
                  }
               })
               console.log(response.data);
            } catch (error) {
               console.error(error);
            }
         },
         get: async (url) => {
            try {
               const response = await axios.post(url, str, {
                  headers: {
                     Authorization: `Bearer ${process.env.WD_TOKEN}`,
                     'Content-Type': 'application/json',
                  }
               })
               console.log(response.data);
            } catch (error) {
               console.error(error);
            }
         }
      }
   }
}

export { WildberriesAPI }


function test() {
   return {
      "params": {
        "card": {
          "countryProduction": "Россия",
          "object": "Джинсы",
          "addin": [
            {
              "type": "Состав",
              "params": [
                {
                  "value": "хлопок",
                  "count": 100
                }
              ]
            },
            {
              "type": "Бренд",
              "params": [
                {
                  "value": "ЛОГОС"
                }
              ]
            },
            {
              "type": "Комплектация",
              "params": [
                {
                  "value": "Джинсы - 1 шт"
                }
              ]
            },
            {
              "type": "Тнвэд",
              "params": [
                {
                  "value": "6203411000"
                }
              ]
            },
            {
              "type": "Пол",
              "params": [
                {
                  "value": "Мужской"
                }
              ]
            }
          ],
          "nomenclatures": [
            {
              "vendorCode": "bluee-123",
              "variations": [
                {
                  "barcode": "2001925979004",
                  "addin": [
                    {
                      "type": "Розничная цена",
                      "params": [
                        {
                          "count": 2222
                        }
                      ]
                    },
                    {
                      "type": "Размер",
                      "params": [
                        {
                          "value": "56"
                        }
                      ]
                    },
                    {
                      "type": "Рос. размер",
                      "params": [
                        {
                          "value": "42"
                        }
                      ]
                    }
                  ]
                }
              ],
              "addin": [
                {
                  "type": "Фото",
                  "params": []
                }
              ]
            }
          ]
        }
      },
      "jsonrpc": "2.0",
      "id": uuid()
    }
}

// const prepareData = {
//    id: uuid(),
//    // Параметры.
//    params: {
//       card: {
//          countryProduction: 'Россия',
//          object: 'Одежда',
//          // supplierVendorCode: '115525',
//          addin: [
//             {
//               "type": "Состав",
//               "params": [
//                 {
//                   "value": "хлопок",
//                   "count": 100
//                 }
//               ]
//             },
//             {
//                type: 'Бренд',
//                params: [{
//                   value: data.brand
//                }]
//             },
//             {
//                type: "Пол",
//                params: [{
//                   value: "Мужской"
//                }]
//             }
//          ],
//          "nomenclatures": [
//            {
//              "vendorCode": "bluee-123",
//              "variations": [
//                {
//                  "barcode": "2001925979004",
//                  "addin": [
//                    {
//                      "type": "Розничная цена",
//                      "params": [
//                        {
//                          "count": 2222
//                        }
//                      ]
//                    },
//                    {
//                      "type": "Размер",
//                      "params": [
//                        {
//                          "value": "56"
//                        }
//                      ]
//                    },
//                    {
//                      "type": "Рос. размер",
//                      "params": [
//                        {
//                          "value": "42"
//                        }
//                      ]
//                    }
//                  ]
//                }
//              ],
//              "addin": [
//                {
//                  "type": "Фото",
//                  "params": []
//                },
//                {
//                  "type": "Фото360",
//                  "params": []
//                },
//                {
//                  "type": "Видео",
//                  "params": []
//                }
//              ]
//            }
//          ]
//       }
//    },
//    jsonrpc: "2.0",
//    id: "json-rpc_8"
// }
// async checkFetch(token) {
// const instance = axios.get({
//    baseURL: 'https://suppliers-api.wildberries.ru/public/api/v1/info',
//    timeout: 1000,
//    headers: { 'Authorization': `Bearer ${token}` }
//  });

// const url = 'https://suppliers-api.wildberries.ru/public/api/v1/info'
//    try {
//       const response = await axios.get(url, {
//          headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log(response);
//    } catch (error) {
//       console.error(error);
//    }
// }