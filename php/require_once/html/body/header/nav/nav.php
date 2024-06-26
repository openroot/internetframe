<nav class="navbar fixed-top navbar-expand-md navbar-light background-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="?go=cover">InternetFrame</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1"><span class="navbar-toggler-icon"></span></button>
		<div id="navbarCollapse1" class="collapse navbar-collapse">
			<ul class="navbar-nav me-auto mb-2 mb-md-0">
				<!-- Menu Base -->
				<li class="nav-item"><a class="nav-link bg-dark text-white" href="?go=cover">Cover</a></li>
				<li class="nav-item"><a class="nav-link" href="?go=stand">Stand</a></li>
		
				<!-- Menu Tree -->
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Rack</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="?go=word_fun">Word Fun</a></li>
						<li><a class="dropdown-item" href="#">TV Channels &raquo;</a>
							<ul class="submenu dropdown-menu">
								<li><a class="dropdown-item" href="?go=aaj_tak">AajTAK</a></li>
							</ul>
						</li>
						<!--<li><a class="dropdown-item" href="#">Menu item 2 &raquo;</a>
							<ul class="submenu dropdown-menu">
								<li><a class="dropdown-item" href="#">Menu item 2.1</a></li>
								<li><a class="dropdown-item" href="#">Menu item 2.2</a></li>
								<li><a class="dropdown-item" href="#">Menu item 2.3 &raquo;</a>
									<ul class="submenu dropdown-menu">
										<li><a class="dropdown-item" href="#">Menu item 2.3.1</a></li>
										<li><a class="dropdown-item" href="#">Menu item 2.3.2 &raquo;</a>
											<ul class="submenu dropdown-menu">
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.1</a></li>
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.2</a></li>
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.3 &raquo;</a>
													<ul class="submenu dropdown-menu">
														<li><a class="dropdown-item" href="#">Menu item 2.3.2.3.1</a></li>
														<li><a class="dropdown-item" href="#">Menu item 2.3.2.3.2</a></li>
													</ul>
												</li>
												<li><a class="dropdown-item active bg-dark foreground-light" href="#">Menu item 2.3.2.4</a></li>
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.5</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a class="dropdown-item active bg-dark foreground-light" href="#">Menu item 2.4</a></li>
								<li><a class="dropdown-item" href="#">Menu item 2.5</a></li>
							</ul>
						</li>
						<li><a class="dropdown-item active bg-dark foreground-light" href="#">Menu item 3</a></li>
						<li><a class="dropdown-item disabled" href="#" tabindex="-1">Menu item 4</a></li>
						<li><hr class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="#">Something else here</a>-->
					</ul>
				</li>
			</ul>
			<div class="d-flex">
				<div>
					<!-- Panel Search -->
					<form class="me-2 d-flex">
						<input class="form-control me-2" type="search" placeholder="Which is" aria-label="Enquire">
						<button class="btn btn-outline-dark" type="submit">Enquire</button>
					</form>
				</div>
				<div>
					<!-- Menu Quick -->
					<div class="dropstart">
						<button id="dropstartUtilities" class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">Utilities</button>
						<ul class="dropdown-menu background-light">
							<li><h6 class="dropdown-header">Aisle</h6></li>
							<li><a class="dropdown-item" href="#">Dark</a></li>
							<li><a class="dropdown-item" href="#">Light</a></li>
							<li><a class="dropdown-item" href="#">Scale</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#">Refresh</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><h6 class="dropdown-header">Change theme</h6></li>
							<li>
								<div class="mx-3">
									<input id="themeSlider" type="range" class="form-range" min="1" max="3" step="1" value="1">
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>