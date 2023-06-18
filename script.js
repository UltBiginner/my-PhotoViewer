
//配列を使った動画の連続再生

const title = ['Scenery', 'Flower', 'Memory', 'Trip']

class SelectMovie {
	
	constructor(title) {
		this.title = title;
		this.btnCalm = document.querySelector('#btnCalm');
		this.btnHot = document.querySelector('#btnHot');
		this.btnBlue = document.querySelector('#btnBlue');
		this.btnSpecial = document.querySelector('#btnSpecial');
		this.btnTest = document.querySelector('#btnTest');
		this.btnSpare =  document.querySelector('#btnSpare');
		this.imgCalm = document.querySelector('#imgCalm');
		this.imgHot = document.querySelector('#imgHot');
		this.imgBlue = document.querySelector('#imgBlue');
		this.imgSpecial = document.querySelector('#imgSpecial');
		this.imgTest = document.querySelector('#imgTest');
		this.imgSpare = document.querySelector('#imgSpare');
		
	}
	
	init() {
		
		this.title = this.title || mainTitle;
				
		this.btnCalm.innerHTML = this.title[0];
		btnCalm.addEventListener('click', (event) => {
			location.href = './Scenery/execute.html';
		});
		
		this.btnHot.innerHTML = this.title[1];
		btnHot.addEventListener('click', (event) => {
			location.href = './Flower/execute.html';
		});
		
		this.btnBlue.innerHTML = this.title[2];
		btnBlue.addEventListener('click', (event) => {
			location.href = './Memory/execute.html';
		});
		
		this.btnSpecial.innerHTML = this.title[3];
		btnSpecial.addEventListener('click', (event) => {
			location.href = './Trip/execute.html';
		});
		
				
	}
}	
	
	

new SelectMovie(title).init();






 



	
	




