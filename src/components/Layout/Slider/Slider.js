import React, { Component } from 'react';
import TopCategory from '../TopCategory/TopCategory';
import './Slider.css';

class Slide extends React.Component {

	render() {
		let slideStyle = { backgroundImage: `url( ${this.props.background})` };
		return (
			<div className='slider__slide' data-active={this.props.active} style={slideStyle}>
				{/* <div className='slider__slide__text'>{this.props.text}</div> */}
			</div>
		);
	}
}

class Slider extends Component {
	state = {
		activeSlide: 0,
	};
	prevSlide() {
		let slide = this.state.activeSlide - 1 < 0 ? this.props.slides.length - 1 : this.state.activeSlide - 1;
		this.setState({
			activeSlide: slide,
		});
	}
	nextSlide() {
		let slide = this.state.activeSlide + 1 < this.props.slides.length ? this.state.activeSlide + 1 : 0;
		this.setState({
			activeSlide: slide,
		});
	}

	componentDidMount() {
		// setInterval(() => {
		// 	this.nextSlide();
		// }, 5000);
	}

	render() {
		let slides = this.props.slides;

		return (
			<div className=''>
				<div id='slide'>
					<div>
						{slides.map((slide, index, array) => {
							return <Slide key={index} background={slide.background} /*text={slide.text}*/ active={index === this.state.activeSlide} />;
						})}
						<div className='leftArrow' onClick={this.nextSlide.bind(this)}>
							<span className='slider__icon__right'></span>
						</div>
						<div className='rightArrow' onClick={this.prevSlide.bind(this)}>
							{' '}
							<span className='slider__icon__left'></span>
						</div>
					</div>
					<TopCategory topCategoryData={this.props.topCategoryData} />
				</div>
			</div>
		);
	}
}

export default Slider;
