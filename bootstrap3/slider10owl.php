
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- head -->
    <meta charset="utf-8">
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Basic usage demo">
    <meta name="author" content="Bartosz Wojciechowski">
    <title>
      Basic Demo | Owl Carousel | 2.0.0-beta.2.4
    </title>

    <!-- Stylesheets -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,300italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="vendor/owl.carousel.2.1.0/new/docs.theme.min.css">

    <!-- Owl Stylesheets -->
    <link rel="stylesheet" href="vendor/owl.carousel.2.1.0/new/owl.carousel.css">
    <link rel="stylesheet" href="vendor/owl.carousel.2.1.0/new/owl.theme.default.css">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <!-- Favicons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="shortcut icon" href="../assets/ico/favicon.png">
    <link rel="shortcut icon" href="favicon.ico">

    <!-- Yeah i know js should not be in header. Its required for demos.-->

    <!-- javascript -->
    <script   src="https://code.jquery.com/jquery-1.12.4.min.js"   integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="   crossorigin="anonymous"></script>
    <script src="vendor/owl.carousel.2.1.0/owl.carousel.js"></script>


  </head>
  <body>





    <!--  Demos -->
    <section id="demos">
      <div class="row">
        <div class="large-12 columns">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <h4>1</h4>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
            <div class="item">
              <h4>5</h4>
            </div>
            <div class="item">
              <h4>6</h4>
            </div>
            <div class="item">
              <h4>7</h4>
            </div>
            <div class="item">
              <h4>8</h4>
            </div>
            <div class="item">
              <h4>9</h4>
            </div>
            <div class="item">
              <h4>10</h4>
            </div>
            <div class="item">
              <h4>11</h4>
            </div>
            <div class="item">
              <h4>12</h4>
            </div>
          </div>
          <h3 id="overview">Overview</h3>
          <p>Basic usage of Owl Carousel. I used <code>loop:true</code> and <code>margin:10</code>. The structure works with any kind of DOM element. In all of my examples i used <code>&lt;div class=&quot;item&quot;&gt;...&lt;/div&gt;</code> but you could put
            any other element <code>div/span/a/img...</code>
          </p>
          <h3 id="setup">Setup</h3>
          <pre><code>$(&#39;.owl-carousel&#39;).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})</code></pre>
          <h3 id="html">html</h3>
          <pre><code>&lt;div class=&quot;owl-carousel&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;1&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;2&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;3&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;4&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;5&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;6&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;7&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;8&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;9&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;10&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;11&lt;/h4&gt;&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;&lt;h4&gt;12&lt;/h4&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
          <script>
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            })
          </script>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="footer">
      <div class="row">
        <div class="large-12 columns">
          <h5>
            <a href="/docs/support-contact.html">Bartosz Wojciechowski</a>
            <a id="custom-tweet-button" href="https://twitter.com/share?url=http://www.owlcarousel.owlgraphic.com&text=Owl Carousel - This is so awesome! " target="_blank"></a>
          </h5>
        </div>
      </div>
    </footer>


  </body>
</html>
