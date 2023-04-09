<script>
  import "$lib/global.css";
</script>

<header>
  <div class="header">
    <div>
      <img src="/logo.png" width="150px" height="75px" alt="" />
    </div>

    <nav>
      <a class="headerlink" href="/">Home</a>
    </nav>
  </div>
</header>

<body />
<slot />

<style>
  .header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    background-color: rgb(0, 0, 0);
  }
  .headerlink {
    margin-right: 25px;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: aqua;
  }
  body {
    /*background-image: url("/survey.jpg");*/
    
    background:  #FCF1E1;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
