const datastore = new Promise ((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.npoint.io/78257c940962628f719a", true)
  xhr.onload = () => {
    if(xhr.status === 200){
      resolve(JSON.parse(xhr.response))
      // console.log('good', xhr.response)
    } else {
      reject("Server error")
      // console.log('no good', xhr.response)
    }
  }

  xhr.onerror = () => {
    reject("ur inet suck")
    // console.log(`pls chech ur connection`)
  }
  xhr.send()
})

async function allTestimonial(){
  testimonialHTML = ``
  const testimonialData = await datastore
  console.log(testimonialData)
  testimonialData.forEach((item) => {
  testimonialHTML += `<div class="testimonial-cont">
  <img class="image" src="${item.image}" alt="Image Description">
  <p>${item.message}</p>
  <p>- ${item.author} -</p>
  <p>${item.rating}<i class="fa-regular fa-star"></i><p>
  </div>`
  }
  )

  document.querySelector('.container-testimonial').innerHTML = testimonialHTML
}

allTestimonial();

async function filterRating(rating){
  const testimonialData = await datastore
  //const response = await fench (link.{ method : "GET"})
  //const testimonialData = await response>].JSON() ==>   tmengembakikan promise
  const ratingFilter = testimonialData.filter((item) => {
    return item.rating === rating
  })

  if(ratingFilter.length === 0){
    testimonialHTML = `<h3>Not Found</h3>`
  } else {

  ratingFilter.forEach((item) => {
    testimonialHTML =``
    testimonialHTML += `<div class="testimonial-cont">
    <img class="image" src="${item.image}" alt="Image Description">
    <p>${item.message}</p>
    <p>- ${item.author} -</p>
    <p>${item.rating}<i class="fa-regular fa-star"></i><p>
    </div>`
    }
    )

    document.querySelector('.container-testimonial').innerHTML = testimonialHTML
  }
}
