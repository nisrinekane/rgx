//tests if value given is IP

function ipTest(ip){
var ref = /\d{3}.\d{3}.\d{2}.\d{1}/g;
return ref.test(ip);
}
