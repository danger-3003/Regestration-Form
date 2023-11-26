const firebaseConfig = {
    apiKey: "AIzaSyDxjbh79osPSMc38e6JZze0ChlRb3py1Wg",
    authDomain: "new-register-9c16a.firebaseapp.com",
    databaseURL: "https://new-register-9c16a-default-rtdb.firebaseio.com",
    projectId: "new-register-9c16a",
    storageBucket: "new-register-9c16a.appspot.com",
    messagingSenderId: "659966685778",
    appId: "1:659966685778:web:2d3448e1aa64136bd6e58b",
    measurementId: "G-J5CPYBY2WR"
  };
// initializeApp
firebase.initializeApp(firebaseConfig);

// reference for db
document.getElementById("form").addEventListener('submit',(e)=>
{
    e.preventDefault();
    var fname = getelement('f_name');
    var lname = getelement('l_name');
    var faname = getelement("fa_name");
    var dob = getelement("dob");
    var email = getelement("email");
    var pass = getelement("pass");

    var registerformdb = firebase.database().ref(fname);
    
    registerformdb.set({
        fname:fname,
        lname:lname,
        faname:faname,
        dob:dob,
        email:email,
        pass:pass,
    });

    document.getElementById("alert").classList.replace("hidden","block");
    document.getElementById("beforesubmit").classList.replace("block","hidden");
    
    setTimeout(()=>
    {
        document.getElementById("beforesubmit").classList.replace("hidden","block");
        document.getElementById("alert").classList.replace("block","hidden");
    }, 3000);
    
    document.getElementById("form").reset();
})
const getelement = (id) =>
{
    return document.getElementById(id).value;
}