document.getElementById('loginForm3').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('user3').value.trim();
    const pass = document.getElementById('pass3').value;
    const msg = document.getElementById('msg3');
  
    if (!user || !pass) {
      msg.innerText = "Please enter both fields!";
      msg.style.color = "red";
    } else {
      msg.innerText = `Welcome, ${user}!`;
      msg.style.color = "lightgreen";
    }
  });
  