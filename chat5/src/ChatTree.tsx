import * as React from 'react';
import * as $ from 'jquery';
import  './ChatTree.css';
import {stateStoreService} from "./state/StateService";


interface IChatTreeProps {
    items:any[],
    onSelected(id:string):void
}

class ChatTree extends React.Component<IChatTreeProps, any> {
    private ref:any;
    constructor(props: IChatTreeProps){
        super(props);
    }

    componentDidUpdate(prevProps:any, prevState:any){
        this.load(this.props.items);
    }

    componentDidMount(){
        this.load(this.props.items);
        document.addEventListener('keydown',this.keyboardListener)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.keyboardListener)
    }

    shouldComponentUpdate(nextProps:IChatTreeProps, nextState:any){
        if(nextProps.items !== this.props.items){
            return true;
        }
        return false;
    }

    render(){
        return(
            <ul ref={elem=>this.ref=elem}/>
        )
    }

    load(items:Array<any>){
        this.clear();
        this.manageLoad(items, 0, $(this.ref));
        this.keyboardListener($(this.ref));

    }

    clear() {
        $('li').remove()
    }

    manageLoad(items:any , count:number, $curElement:any) {


        for(let item of items){
            const $li = $(`<li tabindex="1" data-level="${count}">${this.shiftChildren(count)} ${item.name}</li>`);
            $li.data(item);
            $li.click(() => {
                $li.focus();
                this.lightClicked();
            });

            if (item.type === 'group') {
                $li.dblclick(() => {
                    this.expandOr($li,  count);
                });

            }
            ($curElement.prop("tagName") === 'UL') ? $curElement.append($li) : $curElement.after($li);
        }
    }

    lightClicked(){
        $('li').removeClass('selected');
        $(document.activeElement).addClass('selected');

        if($(document.activeElement).data().type === 'group'){
            this.props.onSelected($(document.activeElement).data().id);
            stateStoreService.setSelectedToChat($(document.activeElement).data());
        }
    }

    showChildren($li:any, item:any, count:any){
        if (item.show === undefined) {
            item.show = true;
            this.manageLoad(item.items, ++count, $li);
        }
        let $li_= $li.next();
        if($li.next().attr("tabindex")){
            const size = $li_.attr("data-level");
            while($li_.attr("data-level") === size){
                item.show = true;
                $li_.show();
                $li_=$li_.next()
            }
        }
    }

    hideChildren($li:any, item:any) {
        let $li_= $li.next();
        const size = $li_.attr("data-level");
        while($li_.attr("data-level") >= size){
            item.show = false;
            $li_.hide();
            $li_=$li_.next()
        }
    }

    expandOr($li:any,  count:any) {
        let item = $li.data();
        if (item.show) {
            this.hideChildren($li, item);
        }
        else {
            this.showChildren($li, item, count);
        }
    }

    keyboardListener =(event:any) => {
        const Arrow = {
            Down: 40,
            Up: 38,
            Right: 39,
            Left: 37,
            Enter: 13,
        };

        switch (event.which) {
            case Arrow.Enter:
                this.EnterArrow();
                break;
            case Arrow.Left:
                this.LeftArrow();
                break;
            case Arrow.Up:
                this.UptArrow();
                break;
            case Arrow.Right:
                this.RightArrow();
                break;
            case Arrow.Down:
                this.DownArrow();
                break;
            default:
                return;
        }

    }

    RightArrow() {
        let $li = $(document.activeElement);
        let item = $li.data();
        let count = $li.attr("data-level");
        if(item.type === 'group')
            this.showChildren($li, item, count);
    }
    LeftArrow() {
        let $li = $(document.activeElement);
        let item = $li.data();
        if(item.type === 'group'){
            if(item.show){
                this.hideChildren($li, item);
            }
            else{
                const size = $li.attr("data-level");
                const $li_size=$li.prev().attr("data-level");

                while(size === $li_size){
                    $li=$li.prev();
                    if($li.data().type === "group"){
                        $li.focus();
                        this.lightClicked();
                        break;
                    }

                }
            }
        }

    }
    UptArrow() {
        let $li = $(document.activeElement);

        do{
            $li = $li.prev();
        } while($li.css('display') === 'none');

        $li.focus();
        this.lightClicked();
    }
    DownArrow() {
        let $li = $(document.activeElement);

        do{
            $li = $li.next();
        } while($li.css('display') === 'none');

        $li.focus();
        this.lightClicked();
    }
    EnterArrow() {
        let $li = $(document.activeElement);
        let item = $li.data();
        const count = $li.attr("data-level");

        if(item.type === 'group')
            this.expandOr($li, count);
    }

    shiftChildren(count:number) {
        var str="";
        console.log(count);
        str = "&#160".repeat(count);
        return str;
    }
}

export default ChatTree;

