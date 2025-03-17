export default `*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}body{background-color:#121212;color:#fff}header{width:100%;background:linear-gradient(90deg,#1a1a1a,#333);color:#fff;padding:20px;text-align:center;display:flex;align-items:center;justify-content:center;animation:fadeIn 1s ease-in-out}header img{height:50px;margin-right:15px}nav{display:flex;justify-content:center;background:#222;padding:15px;animation:slideDown 1s ease-in-out}nav a{color:#fc0;text-decoration:none;padding:10px 20px;font-size:18px;transition:background .3s ease,color .3s ease}nav a:hover{background:#fc0;color:#000;border-radius:5px}.hero{text-align:center;padding:60px;background:linear-gradient(90deg,#1e1e1e,#292929);animation:fadeInUp 1.5s ease-in-out}.modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;padding:50px}.module{background:linear-gradient(135deg,#282828,#3a3a3a);padding:25px;border-radius:15px;box-shadow:0 4px 8px #ffcc004d;text-align:center;transform:translateY(30px);opacity:0;animation:fadeInUp 1s ease-in-out forwards}.module:nth-child(odd){background:linear-gradient(135deg,#333,#444)}footer{text-align:center;background:#000;color:#fc0;padding:15px;margin-top:20px;animation:fadeIn 1.5s ease-in-out}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideDown{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}
`;