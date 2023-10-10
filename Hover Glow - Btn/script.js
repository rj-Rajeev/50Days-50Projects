function openPage(page) {
    let content = '';
    let color = `#dadada`
  
    switch (page) {
      case 'home':
        content = 'Home Page Content';
        color = `#dadada`
        break;
      case 'about':
      case 'portfolio':
        content = 'About/Portfolio Page Content';
        color = `pink`
        break;
      case 'blogs':
        content = 'Blogs/Articles Page Content';
        color = `red`
        break;
      case 'contact':
        content = 'Contact Us Page Content';
        color = `skyblue`
        break;
      default:
        content = 'Default Page Content';
        color = `green`
    }
  
    document.getElementById('page-content').innerText = content;
    document.querySelector("body").style.backgroundColor = color;
  }
  