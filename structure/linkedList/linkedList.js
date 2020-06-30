/*
 * @Author: Bean.Ding
 * @Date: 2020-06-18 13:32:38
 * @LastEditTime: 2020-06-19 14:57:04
 * @LastEditors: Bean.Ding
 */ 
function LinkedList() {
    let listNode = function(ele) {
        this.data = ele;
        this.next = null;
    }

    this.createList = function() {
        let node = new listNode('1');
        node.next = new listNode('1');
        node.next.next = new listNode('1');
        node.next.next.next = new listNode('2');
        node.next.next.next.next = new listNode('2');
        node.next.next.next.next = new listNode('3');
        node.next.next.next.next = new listNode('4');

        return node;
    }
}

// remove-duplicates-from-sorted-list
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
let removeDuplicates1 = function(node) {  
    if (node == null) return;
    let header = node;
    while (header != null) {
        while (header.next != null && header.data === header.next.data) {
            header.next = header.next.next;
        }
        header = header.next;
    }

    return node;
}

let linkedList = new LinkedList();
console.log(removeDuplicates1(linkedList.createList()));


// remove-duplicates-from-sorted-list-ii
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现的数字。
// 思路：表头节点有可能被删除，所以需要使用哑巴节点dummy node。
let removeDuplicates2 = function(node) {
    if (node == null) return;
    let dummp = { data: 0, next: node };
    node = dummp;

    
}