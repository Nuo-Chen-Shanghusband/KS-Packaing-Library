function Tree_naviagation() {
	document.getElementsByClassName("KS-Nav_Tree-navigation_2-parent_i[0]").addEventListener("click",I2())
	function I2() {
		const istyle = document.getElementsByClassName("KS-Nav_Tree-navigation_2-parent_i");
	    const length;
	    for (length = 0; length < istyle.length; length++) {
		    istyle[length].style.transform = 'rotate(45deg)';
			document.getElementsByClassName("KS-Nav_Tree-navigation_2-parent_section[0]").style.display = "block"

	}
}
	}

Tree_naviagation();