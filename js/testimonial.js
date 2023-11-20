// class Cont {

//   constructor(author, massage, image){
//     this.image = image,
//     this.massage = massage,
//     this.author = author
//   }

//   creatingCrateHTML(){
//     return `
//     <div class="testimonial-cont">
//         <img class="image" src="${this.image}" alt="Image Description">
//         <p>${this.massage}</p>
//         <p>- ${this.author}</p>
//       </div>
//     `
//   }
// }

// const testimonial1 = new Cont ("Razan", "WOW CUPU BANGEET","https://images.pexels.com/photos/7241294/pexels-photo-7241294.jpeg");
// const testimonial2 = new Cont ("Pat", "WOW GANTENG BANGEET","https://images.pexels.com/photos/7047607/pexels-photo-7047607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
// const testimonial3 = new Cont ("Nopal", "GGEZ","https://images.pexels.com/photos/7862360/pexels-photo-7862360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

// const testimonials = [testimonial1, testimonial2, testimonial3];

// testimonialHTML = ``
// for(let i = 0; i < testimonials.length; i++){
//   testimonialHTML += testimonials[i].creatingCrateHTML()
// }

// document.querySelector('.container-testimonial').innerHTML = testimonialHTML

// const testimonialData = [
//   { 
//     author: "Razan",
//     message: "WOW CUPU BANGEET",
//     image: "https://images.pexels.com/photos/7241294/pexels-photo-7241294.jpeg",
//     rating: 1
//   },
//   {
//     author: "Pat",
//     message: "WOW GANTENG BANGEET",
//     image: "https://images.pexels.com/photos/7047607/pexels-photo-7047607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     rating: 5
//   }, 
//   {
//     author: "Nopal",
//     message: "GGEZ",
//     image: "https://images.pexels.com/photos/7862360/pexels-photo-7862360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     rating: 4
//   },
//   {
//     author: "Dzikri",
//     message: "EZZZZZZZZ",
//     image: "https://images.pexels.com/photos/7330165/pexels-photo-7330165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     rating: 5
//   },

//]

function allTestimonial(){
  testimonialHTML = ``
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

function filterRating(rating){
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
