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
        styleUrls: ['./chats.component.css'],
    }),
    __metadata("design:paramtypes", [])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxELElBQWEsY0FBYztJQUV6QjtRQURPLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ2xELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFDN0IsR0FBRyxTQUFNO2dCQUNyQixlQUFlO2dCQUNmLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7c0JBQzVELENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUM5QyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqRCxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLCtDQUErQztnQkFDL0Msd0NBQXdDO2dCQUN4Qyx3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUMvQywwQkFBMEI7Z0JBQzFCLCtDQUErQzthQUNoRCxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDWCxDQUFDLEVBeEJpRCxDQXdCakQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3ZDLENBQUM7O0dBQ1csY0FBYyxDQWdDMUI7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGF0cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYXRzID0gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xuICAgICAgY29udGFjdDoge1xuICAgICAgICBhdmF0YXI6IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZWQvJHtcbiAgICAgICAgICAgICAgICAgIGlkeCAlIDIgPT09IDAgPyAnd29tZW4nIDogJ21lbidcbiAgICAgICAgICAgICAgICB9LyR7aWR4fS5qcGdgLFxuICAgICAgICAvLyBSYW5kb20gbmFtZXNcbiAgICAgICAgbmFtZTogaWR4ICUgMiA9PT0gMCA/XG4gICAgICAgICAgICAgIChbJ0xlZWFubmEgTXVub3onLCAnWW9sYW5kYSBLYXJsaW4nLCAnVHJpc2ggUGVlciddW2lkeCAlIDNdKVxuICAgICAgICAgICAgOiAoWydDaHVjayBQdWx2ZXInLCAnT3NjYXIgQmx1bmRlbGwnLCAnSXJ3aW4gV2VhdGhlcnNieSddW2lkeCAlIDNdKVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdESVJFQ1QnLFxuICAgICAgd2hlbjogRGF0ZS5ub3coKSAtICgoaWR4ICsgMSkgKiA3ICogNjAgKiAxMDAwKSxcbiAgICAgIG11dGVkOiBpZHggJSA3ID09PSAwLFxuICAgICAgdW5yZWFkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAgKyAnJywgMTApIC0gMyxcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXG4gICAgICB0ZXh0OiBbXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlLicsXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nXG4gICAgICBdW2lkeCAlIDddLFxuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=