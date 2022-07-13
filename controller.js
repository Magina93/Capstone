const Button= require('./db.json')
let globalID = 6
module.exports={
	deleteCart:(res, req) =>{
		let index = Stroller.findIndex(elem=> elem.id=== +req.params.id)
          Srroller.splice(index, 1) 
     res.status(200).send(stroller)

	},
	getCart:(req, res) => {
		
			res.status(200).send(cart[+req.params.index])
		
		},
//     updateCart:(req, res)=>{

// }






	
		}
