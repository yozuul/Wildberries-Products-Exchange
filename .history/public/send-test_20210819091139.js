
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
   <link rel="stylesheet" href="style.css">
</head>

<body>
   <div class="container">
      <div class="row parser_form_wrapper align-items-end">
         <div class="mb-3 col-6">
            <label for="cardProductURL" class="form-label">Ссылка на карточку</label>
            <input type="text" class="form-control" id="cardProductURL" value="https://www.wildberries.ru/catalog/13243476/detail.aspx?targetUrl=MI">
         </div>
         <div class="col-2 mb-3">
            <button id="passCardURL" class="btn btn-primary col-12">
               <span class="parseInactive">Спарсить</span>
               <div class="spinner parseActive dn">
                  <span class="sr-only">Парсим</span>
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
               </div>
            </button>
         </div>
         <div class="col-2 mb-3">
            <button id="saveCard" class="btn btn-success col-12 dn">
               <span class="saveCardInactive">Добавить</span>
               <div class="spinner saveCardActive dn">
                  <span class="sr-only">Добавляем</span>
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
               </div>
            </button>
         </div>
      </div>
   </div>
   <form class="container mt-5">
      <div class="row">
         <div class="col">
            <div class="mb-3">
               <label for="productName" class="form-label">Название товара</label>
               <input type="text" class="form-control" id="productName" readonly>
            </div>
            <!-- <div class="mb-3">
               <label for="productDesc" class="form-label">Описание товара</label>
               <textarea type="text" class="form-control" id="productDesc" rows="5" readonly></textarea>
            </div> -->
            <div class="mb-3">
               <label for="productBrand" class="form-label">Бренд</label>
               <input type="text" class="form-control" id="productBrand" readonly>
            </div>

            <div class="mb-3">
               <label for="productPrice" class="form-label">Цена</label>
               <input type="text" class="form-control" id="productPrice" readonly>
            </div>
            <div class="mb-3 productImagesDiv dn">
               <label for="productImages" class="form-label">Изображения</label>
               <div id="productImages" class="row"></div>
            </div>
         </div>
         <div class="col">
            <div class="mb-3 productConsistDiv dn">
               <label for="productConsist" class="form-label">Состав</label>
               <input type="text" class="form-control" id="productConsist">
            </div>
            <div class="mb-3">
               <label for="productDesc" class="form-label">Описание</label>
               <textarea type="text" class="form-control" id="productDesc" readonly></textarea>
            </div>
            <div id="productParamsDiv" class="mb-3 dn">
               <label class="form-label">Характеристики</label>
               <table id="productParamsTable">
               </table>
            </div>
         </div>
      </div>
   </form>
   <script src="panel.js"></script>
</body>
</html>