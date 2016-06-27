import {Component} from 'angular2/core';

@Component({
	selector: 'org-item',
	templateUrl: 'partials/org-item.html',
	styles: [
		`
			.org-child-item {
				background-color: #55ffee;
			}
			img {
				width: 150px; 
				height: 40px;
			}
		`
	],
	inputs: ['orgChildItem']
})

export class OrgItemComponent {}
