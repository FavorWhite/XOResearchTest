"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ClockComponent = (function () {
    function ClockComponent() {
    }
    ClockComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.clockCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.radius = this.canvas.height / 2;
        this.context.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;
        var _this = this;
        setInterval(function () { _this.drawClock(); }, 1000);
    };
    ;
    ClockComponent.prototype.drawClock = function () {
        this.drawFace(this.context, this.radius);
        this.markSeconds(this.context, this.canvas);
        this.drawNumbers(this.context, this.radius);
        this.drawTime(this.context, this.radius);
    };
    ;
    ClockComponent.prototype.drawFace = function (context, radius) {
        var grad;
        context.beginPath();
        context.arc(0, 0, radius, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        context.strokeStyle = grad;
        context.lineWidth = radius * 0.05;
        context.stroke();
        context.beginPath();
        context.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
        context.fillStyle = '#333';
        context.fill();
    };
    ClockComponent.prototype.drawNumbers = function (context, radius) {
        var ang;
        var num;
        context.font = radius * 0.11 + "px arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            context.rotate(ang);
            context.translate(0, -radius * 0.87);
            context.rotate(-ang);
            context.fillText(num.toString(), 0, 0);
            context.rotate(ang);
            context.translate(0, radius * 0.87);
            context.rotate(-ang);
        }
    };
    ClockComponent.prototype.drawTime = function (context, radius) {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        this.drawHand(context, hour, radius * 0.6, radius * 0.04);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(context, minute, radius * 0.7, radius * 0.03);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(context, second, radius * 0.85, radius * 0.01);
    };
    ClockComponent.prototype.drawHand = function (context, pos, length, width) {
        context.beginPath();
        context.lineWidth = width;
        context.lineCap = "round";
        context.moveTo(0, 0);
        context.rotate(pos);
        context.lineTo(0, -length);
        context.stroke();
        context.rotate(-pos);
    };
    ClockComponent.prototype.markSeconds = function (context, canvas) {
        var angle;
        var secHandLength = this.radius * 0.94;
        for (var i = 0; i < 60; i++) {
            if ((i !== 0) && (i % 5 !== 0)) {
                angle = i * (Math.PI * 2) / 60;
                context.lineWidth = 1;
                context.beginPath();
                var x1 = Math.cos(angle) * (secHandLength);
                var y1 = Math.sin(angle) * (secHandLength);
                var x2 = Math.cos(angle) * (secHandLength - (secHandLength / 30));
                var y2 = Math.sin(angle) * (secHandLength - (secHandLength / 30));
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.strokeStyle = '#000';
                context.stroke();
            }
        }
    };
    __decorate([
        core_1.ViewChild("Clock"), 
        __metadata('design:type', core_1.ElementRef)
    ], ClockComponent.prototype, "clockCanvas", void 0);
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'my-clock',
            templateUrl: './clock.component.html',
            styleUrls: ['./clock.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map