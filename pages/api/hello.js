const user = [
  {
    name: 'sudama ravidas',
    address: 'Jaridih',
    rs: 21
  },

  {
    name: 'chandrika ravidas',
    address: 'adhowa',
    rs:501
  },

  {
    name: 'jharkhand police',
    address: 'adhowa',
    rs: 51
  },
  {
    name: 'mohan das',
    address: 'datnu',
    rs: 301
  },

  {
    name: 'bhagwan das',
    address: 'khambra',
    rs: 51
  },
  {
    name: 'nandlal das',
    address: 'khambra',
    rs: 101
  },

  {
    name: 'pyare das',
    address: 'chandrapura',
    rs: 101
  },

  {
    name: 'mohan ram',
    address: 'chandrapura',
    rs: 501
  },

  {
    name: 'ranjeet ravidas',
    address: 'jaridih basti',
    rs: 51
  },
  
  {
    name: 'santosh ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'bisun ravidas',
    address: 'bermo',
    gift: 'Gift ',
    rs: 101
  },

  {
    name: 'jageshwar ravidas',
    address: 'bermo',
    gift: 'Gift ',
    rs: 101

  },

  {
    name: 'arjun ravidas',
    address: 'bermo',
    rs: 51
  },

  {
    name: 'ramdev ravidas',
    address: 'bermo',
    rs: 101
  },

  {
    name: 'thakur ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'raj kumar ram',
    address: 'bermo',
    rs: 51
  },

  {
    name: 'jiv lal ram',
    address: 'garmajurwa',
    rs: 101
  },

  {
    name: 'gopal ram ',
    address: 'jaridih basti',
    gift: 'Gift',
    rs:0
  },

  {
    name: 'manik ram ',
    address: 'nichitput',
    gift: 'Gift ',
    rs:101
  },

  {
    name: 'mahru mohli  ',
    address: 'nichitput',
    rs: 21
  },

  {
    name: 'kailash ravidas ',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'suresh ravidas ',
    address: 'jaridih basti',
    gift: 'bartan ',
    rs:101
  },

  {
    name: 'chote lal ram ',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'raj kumar ram ',
    address: 'jaridih basti',
    rs: 51
  },

  //2nd page:-

  {
    name: 'bhuneshwar ram ',
    address: ' telo',
    rs: 101
  },

  {
    name: 'gango devi ',
    address: ' jaridih basti',
    gift: 'Gift',
    rs:0
  },

  {
    name: 'arvind ravidas',
    address: 'khanodih',
    rs: 51
  },

  {
    name: 'binod ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'bharat ravidas',
    address: 'khesmi',
    rs: 51
  },

  {
    name: 'pintu ravidas',
    address: 'jaridih basti',
    rs: 101
  },

  {
    name: 'sudarsan ram',
    address: 'khesmi',
    rs: 101
  },

  {
    name: 'rajesh ram',
    address: 'dhanbad',
    gift: 'gift ',
    rs:51
  },

  {
    name: 'binod ram',
    address: 'saadam',
    gift: 'bartan',
    rs:101
  },

  {
    name: 'baldev ram',
    address: 'lal bangla',
    gift: 'gift ',
    rs:101
  },


  {
    name: 'manoj ravidas',
    address: 'dhori basti',
    gift: 'gift ',
    rs:101
  },

  {
    name: 'sundar ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'chatur ravidas',
    address: 'parasbani',
    gift: 'bartan',
    rs:101
  },

  {
    name: 'meghlal ravidas',
    address: 'parasbani',
    rs: 101
  },

  {
    name: 'bisun ravidas',
    address: 'parasbani',
    rs: 51
  },

  {
    name: 'sanjay ravidas',
    address: 'patratu',
    gift: 'bartan',
    rs:101
  },

  {
    name: 'mathur ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'rajnath ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'baleshwar ravidas',
    address: 'jaridih basti',
    gift: 'Sisaj handi',
    rs:101
  },

  {
    name: 'dashrath ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'rahul ravidas',
    address: '4 no',
    rs: 51
  },

  {
    name: 'dinesh ravidas',
    address: 'jaridih basti',
    rs: 51
  },

  {
    name: 'dinesh ravidas',
    address: 'purabdih',
    gift: 'gift ' ,
    rs:151
  },

  {
    name: 'manoj ravidas',
    address: 'hazaribagh',
    rs: 151
  },

  //3rd page:-
  
]

const user2 = [
  {name:'Mj', age:15},
  {name:'joe', age:25},
  {name:'hema', age:20},
  {name:'mini', age:31},

]
export default function mjvirus(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(user)
  }
}