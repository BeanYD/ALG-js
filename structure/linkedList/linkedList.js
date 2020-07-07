/*
 * @Author: Bean.Ding
 * @Date: 2020-06-18 13:32:38
 * @LastEditTime: 2020-07-07 15:10:55
 * @LastEditors: Bean.Ding
 */ 
function LinkedList() {
    let listNode = function(ele) {
        this.val = ele;
        this.next = null;
    }

    this.createList = function() {
        let head = new listNode('1');
        head.next = new listNode('4');
        head.next.next = new listNode('3');
        head.next.next.next = new listNode('2');
        head.next.next.next.next = new listNode('5');
        head.next.next.next.next.next = new listNode('2');

        return head;
    }

}

// remove-duplicates-from-sorted-list
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
let removeDuplicates1 = function(head) {  
    if (head == null) return;
    let header = head;
    while (header != null) {
        while (header.next != null && header.val === header.next.val) {
            header.next = header.next.next;
        }
        header = header.next;
    }

    return head;
}

let linkedList = new LinkedList();
// console.log(removeDuplicates1(linkedList.createList()));


// remove-duplicates-from-sorted-list-ii
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现的数字。
// 思路：表头节点有可能被删除，所以需要使用哑巴节点dummy node。
var deleteDuplicates = function(head) {
    if (head == null) return head;
    let dummp = new LinkedList();
    dummp.next = head;
    head = dummp;
    
    while (head.next && head.next.next) {
        if (head.next.val === head.next.next.val) {
            const rmVal = head.next.val;
            while (head.next && head.next.val === rmVal) {
                head.next = head.next.next;
            }
        } else {
            head = head.next;
        }
    }
    return dummp.next;
};

// reverse-linked-list
// 反转一个单链表。
// 思路：用一个 prev 节点保存向前指针，temp 保存向后的临时指针
let reverseList = function (head) {  
    let prev;
    while (head != null) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}

// reverse-linked-list-ii
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 思路：先遍历到 m 处，翻转，再拼接后续，注意指针处理
var reverseBetween = function(head, m, n) {
    if (head == null) return head;
    let dummp = new LinkedList(0);
    dummp.next = head;
    head = dummp;

    // 记录m-1位置的node
    let end1;
    for (let i = 0; i < m; i++) {
        end1 = head;
        head = head.next;
    }

    let prev;
    // 记录m位置的node;
    let startM = head;
    for (let i = 0; i < n - m + 1; i++) {
        let tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    end1.next = prev;
    startM.next = head;
    return dummp.next;
};

// merge-two-sorted-lists
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 思路：通过 dummy node 链表，连接各个元素
var mergeTwoLists = function(l1, l2) {
    let dummp = new LinkedList(0);
    let head = dummp;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 ? l1 : l2;

    return dummp.next;
};

// partition-list
// 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
// 思路：将大于 x 的节点，放到另外一个链表，最后连接这两个链表
var partition = function(head, x) {
    if (head === null) return head;
    let dummp = new LinkedList(0);
    dummp.next = head;
    head = dummp;

    let largeDummp = new LinkedList(0);
    let largeHead = largeDummp;
    while (head.next) {
        if (head.next.val >= x) {
            largeHead.next = head.next;
            head.next = head.next.next;
            largeHead = largeHead.next;
        } else {
            head = head.next;
        }
    }

    largeHead.next = null;
    head.next = largeDummp.next;

    return dummp.next;
};

// let head = partition(linkedList.createList(), 3);
// while (head) {
//     console.log(head.val);
//     head = head.next;
// }

