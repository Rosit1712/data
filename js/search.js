// 	let data = {
// 		kamar1: {
// 			"no":1,
// 			"harga":420000,
// 			"status":"kosong"
// 		},
// 		kamar2: {
// 			"no":2,
// 			"harga":350000,
// 			"status":"kosong"
// 		},
// 		kamar3: {
// 			"no":3,
// 			"harga":210000,
// 			"status":"penuh"
// 		},
// 		kamar4: {
// 			"no":4,
// 			"harga":360000,
// 			"status":"kosong"
// 		},
// 		kamar5: {
// 			"no":4,
// 			"harga":160000,
// 			"status":"penuh"
// 		}
// 	};


// function get() {
// 	let hasil = 0;
// 	let hargamin = 
// 		document.getElementById("hargamin").value;
// 	let hargamax =
// 		document.getElementById("hargamax").value;

// 	if (hargamin == 0 || hargamax == 0) {
// 		alert('jangan dikosongin');
// 	}else {	
// 		  let tabel = document.querySelector("#isitabel");
// 		  tabel.innerHTML = "";
// 		for (var i = 0; i <= 4; i++){
// 			let harga = data['kamar'+(i+1)].harga;
// 			if (harga >= hargamin && harga <=hargamax ) {
// 				hasil++;
// 				let row = document.createElement('tr');
// 				row.innerHTML = "<td>" + data['kamar'+(i+1)].no + "</td>";
//        			row.innerHTML += "<td>" + harga + "</td>";
//        			row.innerHTML += "<td>" + data['kamar'+(i+1)].status + "</td>";

//        			tabel.appendChild(row);
// 			}
// 		}
// 		let result = document.getElementById('rslt').innerHTML = "Result : "+hasil;
// 	}
// }