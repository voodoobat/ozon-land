import Swiper, {Navigation} from "swiper";

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {

	const winnersSlider = document.querySelector('.winners-slider');

	if (winnersSlider) {
		new Swiper('.winners-slider', {
			loop: true,
			spaceBetween: 30,
			navigation: {
				prevEl: '.winners-arrow.winners-arrow_role_prev',
				nextEl: '.winners-arrow.winners-arrow_role_next'
			}
		})
	}

	const prizes = document.querySelector('.winners-list');

	if (prizes) {
		new Swiper('.winners-list', {
			slidesPerView: 'auto',
			spaceBetween: 45,
			navigation: {
				prevEl: '.winners-arrow-second_role_prev',
				nextEl: '.winners-arrow-second_role_next'
			},
			breakpoints: {
				1400: {
					slidesPerView: 4
				},
				900: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 2
				}
			}
		})
	}


});
