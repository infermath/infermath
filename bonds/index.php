<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Financial Markets: Fixed Income | Infermath</title>
	<meta name="description" content="There is no free lunch the City of London. However, Infermath offers free course that explains financial markets from the perspective of banks and traders."/>
	<meta name="keywords" content="pawel dudko, open source, open office, financial mathematics, spreadsheet, fixed income, finance, sales and trading, investment banking, financial engineering"/>
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
				<h2>Financial Markets: Fixed Income</h2>
				<ol>
					<li><a href="../financial-markets" class="videolink">Intro, loans</a>
					<li>Bonds
				</ol>
			</div>
			
			<div class="col-lg-6">
				<h3>Bonds</h3>
				Bonds are debt instruments used by big institutions to borrow money.
			</div>	
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/2QbSi8nd3PU" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Bonds concept</h3>
				Among major debt issuers are governments, corporates and banks.
				Bonds pay interest in form of fixed coupon or discounted price.
				Bonds are characterised by yield - the return on initial investment.
				The better the credit of the borrower the higher the bond price and the lower the yield.
				As Financial Times would put it: the prices of bonds and interest rates are inversely related.
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/ha304vtqays" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Zero concept</h3>
				Zero coupon bonds are debt certificates with three main features.
				The issuer of the bond is the institution that borrows money.
				The maturity is the date when the money will be repaid.
				The notional is the amount to be repaid at maturity.
				Bonds are bearer securities which means that whoever owns them at the moment is the lender to the issuer.
				They can be traded at the market, where their price is established.
			</div>
			
			<div class="col-lg-6">
				<iframe src="https://www.youtube.com/embed/944XbDYs4u4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Zero bond valuation</h3>
				Yield to maturity is an interest rate that reflects annual return on a current price of a bond if held to maturity.
				Yield quotatation is equivalent to price quotation and is useful to compare different bonds.
				In this video we are calculating yield-to-maturity of a zero coupoun bond based on price and vice versa.
				<a href="https://docs.python.org/2/library/math.html" class="videolink" target="_blank">Python math library</a><br/>
			</div>
			
		</div>
	</div>
</body>
</html>
