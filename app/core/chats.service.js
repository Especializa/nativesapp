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
    ChatsService = __decorate([
        core_1.Injectable()
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFBQTtJQTRCQSxDQUFDO0lBM0JDLHNCQUFXLCtCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFDN0IsR0FBRyxTQUFNO29CQUNyQixlQUFlO29CQUNmLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7MEJBQzVELENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDL0MsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxvQkFBb0I7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSiwrQ0FBK0M7b0JBQy9DLHdDQUF3QztvQkFDeEMsd0RBQXdEO29CQUN4RCxvREFBb0Q7b0JBQ3BELCtDQUErQztvQkFDL0MsMEJBQTBCO29CQUMxQiwrQ0FBK0M7aUJBQ2hELENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYLENBQUMsRUF4QjJDLENBd0IzQyxDQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQTNCVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7T0FDQSxZQUFZLENBNEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXQgfSBmcm9tICcuL21vZGVscy9jaGF0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXRzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgY2hhdHMoKTogQ2hhdFtdIHtcbiAgICByZXR1cm4gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xuICAgICAgY29udGFjdDoge1xuICAgICAgICBhdmF0YXI6IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZWQvJHtcbiAgICAgICAgICAgICAgICAgIGlkeCAlIDIgPT09IDAgPyAnd29tZW4nIDogJ21lbidcbiAgICAgICAgICAgICAgICB9LyR7aWR4fS5qcGdgLFxuICAgICAgICAvLyBSYW5kb20gbmFtZXNcbiAgICAgICAgbmFtZTogaWR4ICUgMiA9PT0gMCA/XG4gICAgICAgICAgICAgIChbJ0xlZWFubmEgTXVub3onLCAnWW9sYW5kYSBLYXJsaW4nLCAnVHJpc2ggUGVlciddW2lkeCAlIDNdKVxuICAgICAgICAgICAgOiAoWydDaHVjayBQdWx2ZXInLCAnT3NjYXIgQmx1bmRlbGwnLCAnSXJ3aW4gV2VhdGhlcnNieSddW2lkeCAlIDNdKVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdESVJFQ1QnLFxuICAgICAgd2hlbjogRGF0ZS5ub3coKSAtICgoaWR4ICsgMSkgKiA0MCAqIDYwICogMTAwMCksXG4gICAgICBtdXRlZDogaWR4ICUgNyA9PT0gMCxcbiAgICAgIHVucmVhZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwICsgJycsIDEwKSAtIDMsXG4gICAgICAvLyBOb24tc2Vuc2UgcGhyYXNlc1xuICAgICAgdGV4dDogW1xuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU2l4dHktZm91ciBkb2VzblxcJ3QgbGlrZSBwYXlpbmcgdGF4ZXMuJyxcbiAgICAgICAgJ0Egcml2ZXIgYSB0aG91c2FuZCBwYWNlcyB3aWRlIGV2ZXIgc3R1bnMgdGhlIG9ubG9va2VyLicsXG4gICAgICAgICdUaGF0IHN0b2xlbiBmaWd1cmluZSBpcyBvZnRlbiBvbmUgZmxvb3IgYWJvdmUgeW91LicsXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTcGFtIHNhdCBkb3duIG9uY2UgbW9yZS4nLFxuICAgICAgICAnV2hpc2tleSBvbiB0aGUgdGFibGUgc2V0IGEgdHJlZWhvdXNlIG9uIGZpcmUuJ1xuICAgICAgXVtpZHggJSA3XSxcbiAgICB9KSk7XG4gIH1cbn0iXX0=