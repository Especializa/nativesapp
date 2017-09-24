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
                        : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3]),
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
                    'Whiskey on the table set a treehouse on fire.',
                ][idx % 7],
            }); });
        },
        enumerable: true,
        configurable: true
    });
    ChatsService.prototype.getMessages = function (chat) {
        return Array(200).fill('').map(function (ele, idx) { return ({
            // Non-sense phrases
            text: [
                '\u263A Yay, this course is amazing !!! \u270C',
                'Sixty-four doesn\'t like paying taxes.',
                'A river a thousand paces wide ever stuns the onlooker.',
                'That stolen figurine is often one floor above you.',
                '\u263A Yay, this course is amazing !!! \u270C',
                'Spam sat down once more!',
                'Whiskey on the table set a treehouse on fire.',
                'That memory we used to share stole the goods.',
                'Clear water rains heavily',
                'Style is interdependant on the relatedness of ' +
                    'motivation, subcultures, and management',
            ][Math.floor(Math.random() * 10)],
            chat: chat,
            sender: Math.random() > .5 ? chat.contact : null,
            created: Date.now() - ((idx + 1) * 40 * 60 * 1000),
            sent: Math.floor(4 * Math.random()),
        }); });
    };
    return ChatsService;
}());
ChatsService = __decorate([
    core_1.Injectable()
], ChatsService);
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0MsSUFBYSxZQUFZO0lBQXpCO0lBa0RBLENBQUM7SUFqREMsc0JBQUksK0JBQUs7YUFBVDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDO2dCQUM1QyxPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLDhDQUNFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQzdCLEdBQUcsU0FBTTtvQkFDckIsZUFBZTtvQkFDZixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzBCQUM1RCxDQUFDLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4RTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDakQsb0JBQW9CO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0osK0NBQStDO29CQUMvQyx3Q0FBd0M7b0JBQ3hDLHdEQUF3RDtvQkFDeEQsb0RBQW9EO29CQUNwRCwrQ0FBK0M7b0JBQy9DLDBCQUEwQjtvQkFDMUIsK0NBQStDO2lCQUNoRCxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLEVBeEIyQyxDQXdCM0MsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFDRCxrQ0FBVyxHQUFYLFVBQVksSUFBVTtRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztZQUM1QyxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLCtDQUErQztnQkFDL0Msd0NBQXdDO2dCQUN4Qyx3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUMvQywwQkFBMEI7Z0JBQzFCLCtDQUErQztnQkFDL0MsK0NBQStDO2dCQUMvQywyQkFBMkI7Z0JBQzNCLGdEQUFnRDtvQkFDOUMseUNBQXlDO2FBQzVDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1lBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BDLENBQUMsRUFuQjJDLENBbUIzQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtHQUNBLFlBQVksQ0FrRHhCO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSAnLi9tb2RlbHMvY2hhdC5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbHMvbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBTZW50U3RhdHVzIH0gZnJvbSAnLi9tb2RlbHMvc2VudC1zdGF0dXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdHNTZXJ2aWNlIHtcbiAgZ2V0IGNoYXRzKCk6IENoYXRbXSB7XG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgYXZhdGFyOiBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkLyR7XG4gICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ3dvbWVuJyA6ICdtZW4nXG4gICAgICAgICAgICAgICAgfS8ke2lkeH0uanBnYCxcbiAgICAgICAgLy8gUmFuZG9tIG5hbWVzXG4gICAgICAgIG5hbWU6IGlkeCAlIDIgPT09IDAgP1xuICAgICAgICAgICAgICAoWydMZWVhbm5hIE11bm96JywgJ1lvbGFuZGEgS2FybGluJywgJ1RyaXNoIFBlZXInXVtpZHggJSAzXSlcbiAgICAgICAgICAgIDogKFsnQ2h1Y2sgUHVsdmVyJywgJ09zY2FyIEJsdW5kZWxsJywgJ0lyd2luIFdlYXRoZXJzYnknXVtpZHggJSAzXSksXG4gICAgICB9LFxuICAgICAgdHlwZTogJ0RJUkVDVCcsXG4gICAgICB3aGVuOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDQwICogNjAgKiAxMDAwKSxcbiAgICAgIG11dGVkOiBpZHggJSA3ID09PSAwLFxuICAgICAgdW5yZWFkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAgKyAnJywgMTApIC0gMyxcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXG4gICAgICB0ZXh0OiBbXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlLicsXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nLFxuICAgICAgXVtpZHggJSA3XSxcbiAgICB9KSk7XG4gIH1cbiAgZ2V0TWVzc2FnZXMoY2hhdDogQ2hhdCk6IE1lc3NhZ2VbXSB7XG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXG4gICAgICB0ZXh0OiBbXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlIScsXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nLFxuICAgICAgICAnVGhhdCBtZW1vcnkgd2UgdXNlZCB0byBzaGFyZSBzdG9sZSB0aGUgZ29vZHMuJyxcbiAgICAgICAgJ0NsZWFyIHdhdGVyIHJhaW5zIGhlYXZpbHknLFxuICAgICAgICAnU3R5bGUgaXMgaW50ZXJkZXBlbmRhbnQgb24gdGhlIHJlbGF0ZWRuZXNzIG9mICcgK1xuICAgICAgICAgICdtb3RpdmF0aW9uLCBzdWJjdWx0dXJlcywgYW5kIG1hbmFnZW1lbnQnLFxuICAgICAgXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldLFxuICAgICAgY2hhdCxcbiAgICAgIHNlbmRlcjogTWF0aC5yYW5kb20oKSA+IC41ID8gY2hhdC5jb250YWN0IDogbnVsbCxcbiAgICAgIGNyZWF0ZWQ6IERhdGUubm93KCkgLSAoKGlkeCArIDEpICogNDAgKiA2MCAqIDEwMDApLFxuICAgICAgc2VudDogTWF0aC5mbG9vcig0ICogTWF0aC5yYW5kb20oKSksXG4gICAgfSkpO1xuICB9XG59XG4iXX0=