function Tree_navigation() {
	//树状导航
	document.getElementsByClassName('KS-Nav_Tree-navigation_2-parent_i').addEventListener('click',I_Xunzhun());
	document.getElementsByClassName('KS-Nav_Tree-navigation_3-parent_i').addEventListener('click',I_Xunzhun());
	document.getElementsByClassName('KS-Nav_Tree-navigation_4-parent_i').addEventListener('click',I_Xunzhun());
	//对i标签进行事件监听
	function I_Xunzhun() {
		document.getElementsByClassName('KS-Nav_Tree-navigation_2-parent_i').style.transform = 'rotate(45deg)';
		document.getElementsByClassName('KS-Nav_Tree-navigation_3-parent_i').style.transform = 'rotate(45deg)';
		document.getElementsByClassName('KS-Nav_Tree-navigation_4-parent_i').style.transform = 'rotate(45deg)';
	}
}