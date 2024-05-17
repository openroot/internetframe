<nav class="navbar fixed-bottom navbar-expand-md navbar-light background-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="?go=cover">&copy; 2024-<?php echo date("Y"); ?></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_collapse_2"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbar_collapse_2">
			<ul class="navbar-nav">
				<!-- Menu Base -->
				<li class="nav-item"><a class="nav-link bg-dark foreground-light" href="?go=board">Board</a></li>
				<li class="nav-item"><a class="nav-link" href="?go=pen">Pen</a></li>
				<li class="nav-item"><a class="nav-link disabled" href="?go=clip" tabindex="-1">Clip</a></li>
		
				<!-- Menu Tree -->
				<li class="nav-item dropup">
					<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Lamp</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="?go=sun_glass">Sun Glass</a></li>
						<!--<li><a class="dropdown-item" href="#">Menu item 2 &raquo;</a>
							<ul class="submenu-up dropdown-menu">
								<li><a class="dropdown-item" href="#">Menu item 2.1</a></li>
								<li><a class="dropdown-item" href="#">Menu item 2.2</a></li>
								<li><a class="dropdown-item" href="#">Menu item 2.3 &raquo;</a>
									<ul class="submenu-up dropdown-menu">
										<li><a class="dropdown-item" href="#">Menu item 2.3.1</a></li>
										<li><a class="dropdown-item" href="#">Menu item 2.3.2 &raquo;</a>
											<ul class="submenu-up dropdown-menu">
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.1</a></li>
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.2</a></li>
												<li><a class="dropdown-item" href="#">Menu item 2.3.2.3 &raquo;</a>
													<ul class="submenu-up dropdown-menu">
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
		</div>
	</div>
</nav>