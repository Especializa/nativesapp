"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatsComponent = (function () {
    function ChatsComponent() {
        this.chats = [];
        this.chats = Array(200).fill('').map(function (ele, idx) { return ({
            contact: {
                avatar: "https://randomuser.me/api/portraits/med/" + (idx % 2 === 0 ? 'women' : 'men') + "/" + idx + ".jpg",
                // Random names
                name: idx % 2 === 0 ?
                    (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
                    : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3])
            },
            type: 'DIRECT',
            when: Date.now() - ((idx + 1) * 7 * 60 * 1000),
            muted: idx % 7 === 0,
            unread: parseInt(Math.random() * 10 + '', 10) - 3,
            // Non-sense phrases
            text: [
                '\u263A Yay, this course is amazing !!! \u270C',
                'Sixty-four doesn\'t like paying taxes.',
                'A river a thousand paces wide ever stuns the onlooker.',
                'That stolen figurine is often one floor above you.',
                '\u263A Yay, this course is amazing !!! \u270C',
                'Spam sat down once more.',
                'Whiskey on the table set a treehouse on fire.'
            ][idx % 7],
        }); });
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    return ChatsComponent;
}());
ChatsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chats',
        templateUrl: './chats.component.html',
        styleUrls: ['./chats.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxELElBQWEsY0FBYztJQUV6QjtRQURPLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ2xELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFDN0IsR0FBRyxTQUFNO2dCQUNyQixlQUFlO2dCQUNmLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7c0JBQzVELENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUM5QyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqRCxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLCtDQUErQztnQkFDL0Msd0NBQXdDO2dCQUN4Qyx3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUMvQywwQkFBMEI7Z0JBQzFCLCtDQUErQzthQUNoRCxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDWCxDQUFDLEVBeEJpRCxDQXdCakQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7O0dBQ1csY0FBYyxDQWdDMUI7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGF0cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2hhdHMgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGF0cyA9IEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgYXZhdGFyOiBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkLyR7XG4gICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ3dvbWVuJyA6ICdtZW4nXG4gICAgICAgICAgICAgICAgfS8ke2lkeH0uanBnYCxcbiAgICAgICAgLy8gUmFuZG9tIG5hbWVzXG4gICAgICAgIG5hbWU6IGlkeCAlIDIgPT09IDAgP1xuICAgICAgICAgICAgICAoWydMZWVhbm5hIE11bm96JywgJ1lvbGFuZGEgS2FybGluJywgJ1RyaXNoIFBlZXInXVtpZHggJSAzXSlcbiAgICAgICAgICAgIDogKFsnQ2h1Y2sgUHVsdmVyJywgJ09zY2FyIEJsdW5kZWxsJywgJ0lyd2luIFdlYXRoZXJzYnknXVtpZHggJSAzXSlcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnRElSRUNUJyxcbiAgICAgIHdoZW46IERhdGUubm93KCkgLSAoKGlkeCArIDEpICogNyAqIDYwICogMTAwMCksXG4gICAgICBtdXRlZDogaWR4ICUgNyA9PT0gMCxcbiAgICAgIHVucmVhZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwICsgJycsIDEwKSAtIDMsXG4gICAgICAvLyBOb24tc2Vuc2UgcGhyYXNlc1xuICAgICAgdGV4dDogW1xuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU2l4dHktZm91ciBkb2VzblxcJ3QgbGlrZSBwYXlpbmcgdGF4ZXMuJyxcbiAgICAgICAgJ0Egcml2ZXIgYSB0aG91c2FuZCBwYWNlcyB3aWRlIGV2ZXIgc3R1bnMgdGhlIG9ubG9va2VyLicsXG4gICAgICAgICdUaGF0IHN0b2xlbiBmaWd1cmluZSBpcyBvZnRlbiBvbmUgZmxvb3IgYWJvdmUgeW91LicsXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTcGFtIHNhdCBkb3duIG9uY2UgbW9yZS4nLFxuICAgICAgICAnV2hpc2tleSBvbiB0aGUgdGFibGUgc2V0IGEgdHJlZWhvdXNlIG9uIGZpcmUuJ1xuICAgICAgXVtpZHggJSA3XSxcbiAgICB9KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIl19