import {Component} from "angular2/core";
import {OrgInterface} from "./org.interface";

@Component({
  selector: "org-details",
  templateUrl: "partials/org-details.html",
  inputs: ["orgChildDetails"]
})

export class OrgDetailsComponent {}