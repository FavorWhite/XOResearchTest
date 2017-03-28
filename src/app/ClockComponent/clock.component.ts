import { Component, Input, ViewChild, ElementRef }      from '@angular/core';

@Component({
    selector: 'my-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent {
    canvas: any;
    context: CanvasRenderingContext2D;
    radius: number;

    @ViewChild("Clock") clockCanvas: ElementRef;

    ngAfterViewInit() { // wait for the view to init before using the element

        this.canvas = this.clockCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.radius = this.canvas.height / 2;
        this.context.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        var _this = this;
        setInterval(function () { _this.drawClock(); }, 1000);

    };

    drawClock(): void {
        this.drawFace(this.context, this.radius);
        this.markSeconds(this.context, this.canvas);
        this.drawNumbers(this.context, this.radius);
        this.drawTime(this.context, this.radius);
    };

    drawFace(context: CanvasRenderingContext2D, radius: number): void {
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
    }
    drawNumbers(context: CanvasRenderingContext2D, radius: number): void {
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
    }


    drawTime(context: CanvasRenderingContext2D, radius: number): void {
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
    }

    drawHand(context: CanvasRenderingContext2D, pos: number, length: number, width: number): void {
        context.beginPath();
        context.lineWidth = width;
        context.lineCap = "round";
        context.moveTo(0, 0);
        context.rotate(pos);
        context.lineTo(0, -length);
        context.stroke();
        context.rotate(-pos);
    }
    markSeconds(context: CanvasRenderingContext2D, canvas: any) {
        var angle: number;
        var secHandLength = this.radius * 0.94;
        for (var i = 0; i < 60; i++) {
            if ((i !==0) && (i%5!==0)) {
                angle = i  * (Math.PI * 2) / 60;
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
    }
}