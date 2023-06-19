
class PhotoViewer {
	constructor(myArray, adress) {
		this.myArray = myArray;
		this.adress = adress;
		this.currentIndex = 0;
		this.timeSet = 2000;
		this.autoFlug = 0;
	}
	
	init() {
		
		const btnFull = document.querySelector('#btnFull');
		btnFull.addEventListener('click', (event) => {
  // フルスクリーンにする
			this.myReqeustFullScreen(document.body);
		});
				
		const btnExit = document.querySelector('#btnExit');
		btnExit.addEventListener('click', (event) => {
  // フルスクリーンを解除する
			this.myCancelFullScreen();
		});
				
		const prevButtonElm = document.querySelector('#prevButton');
		prevButtonElm.addEventListener('click', () => {
			this.autoFlug = 0;
			this.prev();
		});
		
		const btnEnd = document.querySelector('#btnEnd');
		btnEnd.addEventListener('click', (event) => {
			location.href = '../index.html';
		});
		
		const t2SecButtonElm = document.getElementById('t2SecButton');
		t2SecButtonElm.addEventListener('click', () => {
			this.autoFlug = 1;
			this.next();
			this.timeSet = 2000;
		});
		
		const t5SecButtonElm = document.getElementById('t5SecButton');
		t5SecButtonElm.addEventListener('click', () => {
			this.autoFlug = 1;
			this.next();
			this.timeSet = 5000;
		});
		
		const t10SecButtonElm = document.getElementById('t10SecButton');
		t10SecButtonElm.addEventListener('click', () => {
			this.autoFlug = 1;
			this.next();
			this.timeSet = 10000;
		});
		
		const t20SecButtonElm = document.getElementById('t20SecButton');
		t20SecButtonElm.addEventListener('click', () => {
			this.autoFlug = 1;
			this.next();
			this.timeSet = 20000;
		});
		
		this.images = this.shuffleArray(this.myArray);
		console.log(this.images);
		
		this.updatePhoto();
		
	}			
	updatePhoto() {
		const frameElm = document.getElementById('photoViewer').querySelector('.frame');
		const imageIndex = this.currentIndex + 1;
		document.getElementById('base-picture').setAttribute('src', `${this.adress}/${this.images[this.currentIndex]}.JPG?raw=true`);
		this.startTimer();
	}
	
	startTimer() {
		if (this.autoFlug > 0) {
			if (this.timeKey) {
				clearTimeout(this.timeKey);
			}
			this.timeKey = setTimeout(() => {
				this.next();
			}, this.timeSet);
		}
		
	}
	
	next() {
		const lastIndex = this.images.length -1;
		if (lastIndex === this.currentIndex) {
			this.currentIndex = 0;
		} else {
			this.currentIndex ++;
		}
		
		this.updatePhoto();
		
	}
	
	prev() {
		const lastIndex = this.images.length -1;
		if (this.currentIndex === 0) {
			this.currentIndex = lastIndex;
		} else {
			this.currentIndex --;
		}
		
		this.updatePhoto();
	}
	
	shuffleArray(sourceArr) {
  // 元の配列の複製を作成
		const array = sourceArr.concat();
  // Fisher–Yatesのアルゴリズム
		const arrayLength = array.length;
		for (let i = arrayLength - 1; i >= 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
		}
		return array;
	}
	
	myReqeustFullScreen(element) {
		if (element.requestFullscreen) {
    // 標準仕様
			element.requestFullscreen();
		} else if (element.webkitRequestFullscreen) {
    // Safari, Chrome
			element.webkitRequestFullscreen();
		} else if (element.mozRequestFullScreen) {
    // Firefox
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
    // IE11+
			element.msRequestFullscreen();
		}
	}
	
	myCancelFullScreen() {
		if (document.exitFullscreen) {
    // 標準仕様
			document.exitFullscreen();
		} else if (document.webkitCancelFullScreen) {
    // Safari, Chrome
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
    // Firefox
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
    // IE 11+
			document.msExitFullscreen();
		}
	}
	
}
	


const myArray = [
'Muku',
'Osaka%20Expo',
'My%20House',
'Lake%20Hadori'
];

new PhotoViewer(myArray, '../images').init();
