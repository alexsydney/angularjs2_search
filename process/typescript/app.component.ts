import {Component} from 'angular2/core';
import {OrgInterface} from './org.interface';
import {OrgItemComponent} from './org-item.component';
import {OrgDetailsComponent} from './org-details.component';

@Component({
  selector: 'my-app',
  // template: '<h1>Welcome</h1>'
  templateUrl: 'partials/app.html',
	directives: [OrgItemComponent, OrgDetailsComponent],
  // CSS Styles
  styles: [
  	// CSS Styles - Straight Quotes to Insert Specific Element
  	'.brandColor',

  	// CSS Styles - Backtick usage
  	`
  		.btn-square {
  			display: inline-block;
  			padding: 0.75em;
  			margin-bottom: 0;
  			font-size: 1.3rem;
  			line-height: 140%;
  			text-align: center;
  			vertical-align: middle;
    		text-decoration: none;
    		white-space: nowrap;
    		cursor: pointer;
    		border: 1px solid transparent;
    		border-radius: 4px;
    		color: #ffffff;
  			background-color: #ff5577;
				background-size: 18px 18px;
    		min-width: 28px;
    		min-height: 28px;
    		background-position: center center;
    		background-repeat: no-repeat;
		    -webkit-user-select: none;
		       -moz-user-select: none;
		        -ms-user-select: none;
		         -o-user-select: none;
		            user-select: none;
  		}
  	`
  ],

  // CSS Styles in External Stylesheet
  styleUrls: [
  	'css/app.css'
  ] 

})

export class AppComponent {

	// Simple Notation
	name = 'Luke';

	// Formal Notation in ES6 and Class-based Architectures

	// Variable Property of Component Declarations of specific strict type
	// orgName: string;
	orgs: OrgInterface[]; // Array of Org Type
	currentOrg: OrgInterface;
	orgServices: string[]; // Array
	orgMedals: any; // Object of type any
	activityName: string = '';

	// Angular JS 2 event tracking. Passing an event is treated differently 
	// from passing a Local Template Variable
	onClickService(service) {
		this.activityName = service;
	};

	onClickMedal(e, medalItemElement) {
		// console.log(e.target.innerHTML);
		this.activityName = ''; // Reset value shown
		this.activityName = e.target.innerHTML;
		// console.log("medalItemElement is: " + medalItemElement);
		medalItemElement.style.backgroundColor = "#ffee55";
	};

	onClickShowCurrentOrg(item) {
		this.currentOrg = item;
	};

	addService(newService) {
		console.log('Added Service: ' + newService);
		this.orgServices.push(newService);
	};

	// Constructor/Initialiser function to auto setup instance value of Component
	constructor() {

		// Data Structures with Strict Typing

		// this.orgName = 'Race'; // Property

		// Declare Variable orgs fed with Constant ORGS
		this.orgs = ORGS;

		// Array
		this.orgServices = ['Social Networking', 'Record Results'];

		// Array of Objects containing Properties
		this.orgMedals = [
			{
				activity: 'Running',
				kinds: ['Normal', 'Trips']
			},
			{
				activity: 'Swimming',
				kinds: ['Normal', 'Near-Drownings']
			},
			{
				activity: 'Cycling',
				kinds: ['Normal', 'Highside', 'Lowside']
			},
			{
				activity: 'Triathalon',
				kinds: ['Normal', 'Exhaustion']
			}
		];

	}
	
} // end export

/**
 * Variable Constant ORGS is an Array of Type Org
 * (in object format defined in Interface) and fed with raw sample Data
 */
var ORGS: OrgInterface[] = [
	{
		"name": "Brand 1",
		"shortname": "brand1",
		"location": "Tokyo"
	},
	{
		"name": "Brand 2",
		"shortname": "brand2",
		"location": "Sydney"
	}
]