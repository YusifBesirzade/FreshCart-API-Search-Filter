let detaillist = document.getElementById('detaillist')
const Base_API = 'https://69c575498a5b6e2dec2c8520.mockapi.io/api/pr1/products'
const Detail_API = 'https://69ccfa2cddc3cabb7bd1da79.mockapi.io/pd/pdetail'

function CreateSlug(name) {
    return name 
           .toLowerCase()
           .trim()
           .replace(/[^\w\s-]/g, '') // Xüsusi simvolları silir
           .replace(/[\s_-]+/g, '-') // Boşluqları tire ilə əvəz edir
           .replace(/^-+|-+$/g, ''); // Başda və sonda tireni silir
}

function getDetail() {
    const UrlParams = new URLSearchParams(window.location.search)
    const sendSlug = UrlParams.get('s')

    Promise.all([
        fetch(Base_API).then(res => res.json()),
        fetch(Detail_API).then(res => res.json())
    ])
    .then(([products, details]) => {
        const product = products.find(item => CreateSlug(item.name) === sendSlug)

        const detail = details.find(d => d.productId === Number(product.id))

        detaillist.innerHTML = `
              <div class="product w-[800px] h-full mx-auto border-1 border-gray-300 rounded-xl flex flex-col xl:flex-row items-center justify-center gap-3 p-6">
                        <div>
                            <img class="w-[800px] object-contain overflow-hidden" src="${product.image}" alt="product photo">
                        </div>      
                        <div class="text-xl flex flex-col items-center font-semibold">
                            <div class="flex items-center flex-col gap-3">
                                  <p class="text-gray-500">${product.category}</p>
                                  <h5 class="text-sm">${product.name}</h5>
                            </div>
                            <div class="rating flex items-center gap-1 py-3">
                                <div class="flex gap-2 font-medium">
                                    <p>Rating:  ${detail ? detail.rating : 4.5}</p>
                                    <p>(${detail ? detail.reviews : product.commentcount})</p>
                                </div>
                            </div>
                            <p class="mt-3">${detail ? detail.description : ''}</p>
                            <div class="flex items-center justify-center gap-5 py-4 text-xl">
                                <p>${product.price} $</p>
                                <p>Weight: ${detail ? detail.weight : 'N/A'}</p>
                                <button class="bg-[#17a719] text-white px-3 py-1 rounded-sm cursor-pointer">+ Add</button>
                            </div>       
                        </div>
        </div>
        `
    })

}

getDetail()
