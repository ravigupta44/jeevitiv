const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const postRoutes = require("./routes/posts");
const podcastRoutes = require("./routes/podcasts");
const careersPageRoutes = require("./routes/careersPage");
const doctorSignup = require("./routes/doctorSignup");

// const sendSms = require('twilio');
const app = express();
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

//As ref
// app.use(helmet({    
//   contentSecurityPolicy: {       
//     directives: {          
//       defaultSrc: ["'self'"],          
//       scriptSrc: ["'self'", "'unsafe-inline'", "https://jeevitiv.herokuapp.com"],          
//       styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],          
//       imgSrc: ["'self'", 'data:', 'https://*.com'],          
//       fontSrc: ["'self'", 'https://*.com', 'data:'],
//       objectSrc: ["'self'"],
//       mediaSrc: ["'self'"],
//       frameSrc: ["'self'", 'https://*.com']      
//     },    
//   } }));
app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
var springedge = require("springedge");
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));




mongoose
  .connect(
    /*"mongodb+srv://ravi:WGzyH3PcG-ad7vz@cluster0.vpgge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",*/
    /*"mongodb+srv://Teamjeevitiv:XgofkKHvzcFiHbIe@database1.3d3dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",*/
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:true
    }
  )
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));
mongoose.set("useFindAndModify", false);


 
//storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); //"hello.jpg"
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


//model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  dob: String,
  telephone: String,
  address: String,
  pinCode: String,
  city: String,
  country: String,
});
const User = new mongoose.model("User", userSchema);
//routes
app.post("/login/patient/email", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/patientSignup", (req, res) => {
  const {
    name,
    email,
    password,
    gender,
    dob,
    telephone,
    address,
    pinCode,
    city,
    country,
  } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
        gender,
        dob,
        telephone,
        address,
        pinCode,
        city,
        country,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

const resource = require("./routes/resource");
app.use("/", resource);

const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

const careersRoutes = require("./routes/careers");
app.use("/careersForm", careersRoutes);

const blogRoutes = require("./routes/blog");
app.use("/blogposts", blogRoutes);

app.use("/api/posts", postRoutes);
app.use("/api/podcasts", podcastRoutes);
app.use("/api/careersPage", careersPageRoutes);
app.use("/doctorSignupPage", doctorSignup )




const events = require("./routes/event.js");
app.use("/", events);


if ( process.env.NODE_ENV == 'production'){
  
  app.use(express.static(path.join(__dirname,'/LandingPage/build')));

  app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,'LandingPage/build','index.html'));

  })
  
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const accountSid = process.env.accountSid;
// const authToken = process.env.authToken;
// const smsKey = process.env.SMS_SECRET_KEY;
// const twilioNum = '+19165459178';
// const JWT_AUTH_TOKEN = 'AHBDHDBDJBSKSDBJJBJFEHVRIRKNRKKRNKNR';

// const client = require('twilio')(accountSid, authToken);

// // SendOTP for authentication
// app.post('/sendOTP', (req, res) => {
// 	const { phone } = req.body;
// 	const otp = Math.floor(100000 + Math.random() * 900000);	// generate OTP
// 	const ttl = 2 * 60 * 1000;									// OTP expire time
// 	let expires = Date.now();
//     expires+=ttl;
// 	const data = `${phone}.${otp}.${expires}`;
// 	const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');
// 	const fullHash = `${hash}.${expires}`;

// 	// Send OTP to customers phone number

// 	client.messages
// 		.create({
// 			body: `Your Jeevitiv verification code is: ${otp}`,
// 			from: twilioNum,
// 			to: phone
// 		})
// 		.then((messages) => {
// 			console.log(messages);
// 			// return res.status(200).send({ phone, hash: fullHash });          // Use this way in Production
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			return res.json({error: err.message });
// 		});

// 	res.status(200).json({ phone, otp });  // this bypass otp via api only for development instead hitting twilio api all the time
// });

// // VerifyOTP from customer
// app.post('/verifyOTP', async(req, res) => {
// 	const phone = req.body.phone;
// 	const hash = req.body.hash;
// 	const otp = req.body.otp; 		// OTP entered by customer
// 	let [ hashValue, expires ] = hash.split('.');

// 	let now = Date.now();

// 	// If OTP is expired then
// 	if (now > parseInt(expires)) {
// 		return res.status(504).send({ msg: 'Timeout. Please try again' });
// 	}

// 	let data = `${phone}.${otp}.${expires}`;
// 	let newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');
// 	if (newCalculatedHash === hashValue) {
//         try{

//             const accessToken = jwt.sign({ phone }, JWT_AUTH_TOKEN); // { expiresIn: '1d' }
//             console.log('user confirmed');
//             res.status(202).send({ msg: 'Device verified', accessToken });
//         } catch(err) {
//             console.log(err);
//             return res.status(400).json({error : err.message });
//         }

// 	} else {
// 		console.log('not authenticated');
// 		return res.status(400).send({ verification: false, msg: 'Incorrect OTP' });
// 	}
// });
