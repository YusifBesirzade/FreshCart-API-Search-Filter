const productsfilter = document.getElementById('productsfilter')
const productslist = document.getElementById('productslist')
let data = []

// Category fetch start
fetch('https://69c575498a5b6e2dec2c8520.mockapi.io/api/pr1/productfilter')
.then(res => res.json())
.then(filter => {
    filter.map(f => {
        productsfilter.innerHTML += `
        <div onclick="productFilter('${f.category}')" class="productfilter border-1 border-gray-300 flex-auto rounded-xl flex flex-col items-center justify-center gap-2 p-5 cursor-pointer hover:border-green-500">
                        <img src="${f.image}" alt="">
                        <h4>${f.category}</h4>  
        </div>
        `
    })
})
// End


// Product fetch start
fetch('https://69c575498a5b6e2dec2c8520.mockapi.io/api/pr1/products')
.then(res => res.json())
.then(resData => {
    data = resData;
    renderData(data)
})

function renderData(data) {
    productslist.innerHTML = data.map(p =>
        `
        <div class="product flex-auto h-full border-1 border-gray-300 rounded-xl flex flex-col items-center gap-3 p-6">
                        <div>
                            <img class="w-full h-[150px] object-contain overflow-hidden" src="${p.image}" alt="product photo">
                        </div>
                        <div class="text-sm">
                            <div class="flex items-center flex-col gap-3">
                                  <p class="text-gray-500">${p.category}</p>
                                  <h5 class="text-sm">${p.name}</h5>
                            </div>
                            <div class="stars flex items-center gap-1 py-3">
                                <div class="flex gap-1">
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star-half-stroke" style="color: rgb(234, 179, 8);"></i>
                                </div>
                                <div class="flex gap-2 font-medium">
                                    <p>4.5</p>
                                    <p>(${p.commentcount})</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center gap-5">
                                <p>${p.price} $</p>
                                <button class="bg-[#17a719] text-white px-3 py-1 rounded-sm cursor-pointer">+ Add</button>
                            </div>
                        </div>
        </div>
        `
    ).join('')
}
// End


// Filter method start
function productFilter(category) {
    let msj = document.getElementById('msj')
    const filtrdata = data.filter(item => item.category === category)
    if( filtrdata.length === 0 ) {
        msj.innerHTML = 'Bu kategoriyaya aid mehsul tükənib halhazırda stokta yoxdur'
        renderData([])
    }
    else {
        msj.innerHTML = ''
        renderData(filtrdata)   
    }
}
// End

// Search Start
searchinput.addEventListener('input', (s) => {
    mehsulaxtarma(s.target.value)
    s.target.value == '' ? searchcardlist.style.display = 'none' : searchcardlist.style.display = 'block'
})

function mehsulaxtarma(searchinput) {
    const keyword = searchinput.toLowerCase();
    const axtarilanmehsul = data.filter(item => item.name.toLowerCase().includes(keyword))

    renderData(axtarilanmehsul)
    SearchCardData(axtarilanmehsul)
}

function SearchCardData(data) {
    searchcardlist.innerHTML = data.map(item =>
        `
        <div class="srchproduct w-full max-w-[250px] h-full border-1 border-black rounded-xl mx-auto m-2 flex flex-col items-center p-2 bg-white">
                        <div>
                            <img class="w-full h-[150px] object-contain overflow-hidden" src="${item.image}" alt="product photo">
                        </div>
                        <div class="text-sm">
                            <div class="flex flex-col gap-3">
                                  <p class="text-gray-500">${item.category}</p>
                                  <h5 class="text-sm">${item.name}</h5>
                            </div>
                            <div class="stars flex gap-3 py-3">
                                <div class="flex gap-1">
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star" style="color: rgb(234, 179, 8);"></i>
                                    <i class="fa-solid fa-star-half-stroke" style="color: rgb(234, 179, 8);"></i>
                                </div>
                                <div class="flex items-center gap-2 font-medium">
                                    <p>4.5</p>
                                    <p>(${item.commentcount})</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <p>${item.price} $</p>
                                <button class="bg-[#17a719] text-white px-3 py-1 rounded-sm cursor-pointer">+ Add</button>
                            </div>
                        </div>
        </div>
        `
    ).join('')
}
// End

