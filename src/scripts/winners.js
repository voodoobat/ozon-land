import Swiper, {Navigation} from "swiper";

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.winners-slider', {
		loop: true,
		spaceBetween: 30,
		navigation: {
			prevEl: '.winners-arrow.winners-arrow_role_prev',
			nextEl: '.winners-arrow.winners-arrow_role_next'
		}
	})

});
