import Swiper, {Navigation} from "swiper";

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
	new Swiper('.feed-slider', {
		slidesPerView: 1,
		slidesPerColumn: 1,
		slidesPerColumnFill: 'row',
		spaceBetween: 20,
		navigation: {
			prevEl: '.feed-arrow.feed-arrow_role_prev',
			nextEl: '.feed-arrow.feed-arrow_role_next'
		},
		breakpoints: {
			1024: {
				spaceBetween: 24,
				slidesPerColumn: 2,
				slidesPerView: 4
			},
			900: {
				slidesPerColumn: 2,
				slidesPerView: 4
			},
			640: {
				slidesPerView: 3
			},
			480: {
				slidesPerView: 2,
			}
		}
	})
});
