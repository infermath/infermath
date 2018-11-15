<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Infermath Open source of math</title>
	<meta name="description" content="Infermath links mathematical theory with programming application to provide high level understanding of quantitative fields"/>
	<meta name="keywords" content="probability in R, pawel dudko, discrete random variables, open source, programming, mathematics, open education, free education, financial markets, fixed income"/>
	<meta hhtp-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<?php 
		$root = realpath($_SERVER["DOCUMENT_ROOT"]);
		include "$root/infermath/statics.php";
		include_once("$root/infermath/analyticstracking.php") 
	?>
</head>

<body>
	<div class="container">
		<?php include "$root/infermath/header.php";	?>
		
		<div class="row">
			<div class="col-lg-6">
				<h2>What is it?</h2>
				Infermath is an online education platform. <br/>
				It links mathematical theory with programming application. 
				It aims to provide high level understanding of quantitative fields.
			</div>
			
			<div class="col-lg-6">
				<iframe  src="https://www.youtube.com/embed/TFq6XTAxcfE" frameborder="0" allowfullscreen ></iframe>
				
			</div>
			
			<div class="col-lg-6">
				<h2>Online courses</h2>
				Check out two courses published so far:
				<ol>
					<li>Probability in R: Discrete Random Variables
					<li>Financial Markets in Python: Fixed Income
				</ol>

				<div class="tile1">
					<a href="bernoulli" class="tilelink">
					<img title="Probability in R" src="img/Rlogo.png" class="icon" alt="R logo"/>
					</a>
				</div>

				<div class="tile1">
					<a href="financial-markets" class="tilelink">
					<img title="Financial Markets in Python" src="img/python.png" class="icon" alt="Python"/>
					</a>
				</div>
				<div style ="clear:both"></div>
			</div>
			
			<div class="col-lg-6">	
				<h2>About me</h2>
				My name is Paweł Dudko.
				I like mathematics, programming and logic.
				I am passionate about sharing knowledge. 
				I believe everybody should have same chances and free access to education. 
				I received BSc in Mathematics at University of Warsaw and MSc in Financial Engineering at Imperial College London.
				I worked for 5y in derivatives trading in London and in Frankfurt.
				Currently working in web development.
			</div>
			
			<div class="col-lg-6">
				<h2>Like Infermath?</h2>
				Here you will find more:
				<ul>
					<li>Both courses on Youtube
					<li>Probability in R on Udemy
					<li>Github: code behind tutorials
					<li>Infermath Facebook page
					<li>My LinkedIn profile
					<li>Email: <a href="mailto:pawel.dudko@infermath.com" class="videolink">pawel.dudko@infermath.com </a> 
				</ul>
				
			</div>
			
			<div class="col-lg-6">
				<br/>
				<?php include './social.php'; ?>
			</div>
		</div>
	</div>
</body>
</html>
