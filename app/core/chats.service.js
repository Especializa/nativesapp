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
                when: Date.now() - ((idx + 1) * 40 * 60 * 1000),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0MsSUFBYSxZQUFZO0lBQXpCO0lBNEJBLENBQUM7SUEzQkMsc0JBQVcsK0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztnQkFDNUMsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSw4Q0FDRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxVQUM3QixHQUFHLFNBQU07b0JBQ3JCLGVBQWU7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDYixDQUFDLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzswQkFDNUQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEU7Z0JBQ0QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNwQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pELG9CQUFvQjtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLCtDQUErQztvQkFDL0Msd0NBQXdDO29CQUN4Qyx3REFBd0Q7b0JBQ3hELG9EQUFvRDtvQkFDcEQsK0NBQStDO29CQUMvQywwQkFBMEI7b0JBQzFCLCtDQUErQztpQkFDaEQsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ1gsQ0FBQyxFQXhCMkMsQ0F3QjNDLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtHQUNBLFlBQVksQ0E0QnhCO0FBNUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSAnLi9tb2RlbHMvY2hhdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IGNoYXRzKCk6IENoYXRbXSB7XG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgYXZhdGFyOiBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkLyR7XG4gICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ3dvbWVuJyA6ICdtZW4nXG4gICAgICAgICAgICAgICAgfS8ke2lkeH0uanBnYCxcbiAgICAgICAgLy8gUmFuZG9tIG5hbWVzXG4gICAgICAgIG5hbWU6IGlkeCAlIDIgPT09IDAgP1xuICAgICAgICAgICAgICAoWydMZWVhbm5hIE11bm96JywgJ1lvbGFuZGEgS2FybGluJywgJ1RyaXNoIFBlZXInXVtpZHggJSAzXSlcbiAgICAgICAgICAgIDogKFsnQ2h1Y2sgUHVsdmVyJywgJ09zY2FyIEJsdW5kZWxsJywgJ0lyd2luIFdlYXRoZXJzYnknXVtpZHggJSAzXSlcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnRElSRUNUJyxcbiAgICAgIHdoZW46IERhdGUubm93KCkgLSAoKGlkeCArIDEpICogNDAgKiA2MCAqIDEwMDApLFxuICAgICAgbXV0ZWQ6IGlkeCAlIDcgPT09IDAsXG4gICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUuJyxcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLidcbiAgICAgIF1baWR4ICUgN10sXG4gICAgfSkpO1xuICB9XG59Il19