"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatsService = (function () {
    function ChatsService() {
    }
    Object.defineProperty(ChatsService.prototype, "chats", {
        get: function () {
            return Array(200).fill('').map(function (ele, idx) { return ({
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
        },
        enumerable: true,
        configurable: true
    });
    return ChatsService;
}());
ChatsService = __decorate([
    core_1.Injectable()
], ChatsService);
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsSUFBYSxZQUFZO0lBQXpCO0lBNEJBLENBQUM7SUEzQkMsc0JBQVcsK0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztnQkFDNUMsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSw4Q0FDRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxVQUM3QixHQUFHLFNBQU07b0JBQ3JCLGVBQWU7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDYixDQUFDLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzswQkFDNUQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEU7Z0JBQ0QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNwQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pELG9CQUFvQjtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLCtDQUErQztvQkFDL0Msd0NBQXdDO29CQUN4Qyx3REFBd0Q7b0JBQ3hELG9EQUFvRDtvQkFDcEQsK0NBQStDO29CQUMvQywwQkFBMEI7b0JBQzFCLCtDQUErQztpQkFDaEQsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ1gsQ0FBQyxFQXhCMkMsQ0F3QjNDLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtHQUNBLFlBQVksQ0E0QnhCO0FBNUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdHNTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBjaGF0cygpIHtcbiAgICByZXR1cm4gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xuICAgICAgY29udGFjdDoge1xuICAgICAgICBhdmF0YXI6IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZWQvJHtcbiAgICAgICAgICAgICAgICAgIGlkeCAlIDIgPT09IDAgPyAnd29tZW4nIDogJ21lbidcbiAgICAgICAgICAgICAgICB9LyR7aWR4fS5qcGdgLFxuICAgICAgICAvLyBSYW5kb20gbmFtZXNcbiAgICAgICAgbmFtZTogaWR4ICUgMiA9PT0gMCA/XG4gICAgICAgICAgICAgIChbJ0xlZWFubmEgTXVub3onLCAnWW9sYW5kYSBLYXJsaW4nLCAnVHJpc2ggUGVlciddW2lkeCAlIDNdKVxuICAgICAgICAgICAgOiAoWydDaHVjayBQdWx2ZXInLCAnT3NjYXIgQmx1bmRlbGwnLCAnSXJ3aW4gV2VhdGhlcnNieSddW2lkeCAlIDNdKVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdESVJFQ1QnLFxuICAgICAgd2hlbjogRGF0ZS5ub3coKSAtICgoaWR4ICsgMSkgKiA3ICogNjAgKiAxMDAwKSxcbiAgICAgIG11dGVkOiBpZHggJSA3ID09PSAwLFxuICAgICAgdW5yZWFkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAgKyAnJywgMTApIC0gMyxcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXG4gICAgICB0ZXh0OiBbXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlLicsXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nXG4gICAgICBdW2lkeCAlIDddLFxuICAgIH0pKTtcbiAgfVxufSJdfQ==