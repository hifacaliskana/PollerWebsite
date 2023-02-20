<script>
  import "$lib/global.css";
</script>

<header>
  <div class="header">
    <div>
      <img src="/logo.png" width="150px" height="75px" alt="" />
    </div>

    <nav>
      <a class="headerlink" href="/"><th>Home</th></a>
      <a class="headerlink" href="/poll/create"><th>Create Poll</th></a>
      <a class="headerlink" href="/Registry-Page"><th>Registry</th></a>
      <a class="headerlink" href="/Login-Page"><th>Login</th></a>
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
    background-color: rgb(9, 10, 42);
  }
  .headerlink {
    margin-right: 25px;
    text-decoration: none;
    color: white;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  a:hover {
    color: aqua;
  }
  body {
    /*background-image: url("/survey.jpg");*/
    background: -webkit-linear-gradient(to right, #155799, #159957);
    background: linear-gradient(to right, #155799, #159957);
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
