// Created by Byeonggeol Ha on 2020-02-02.
import * as dateFormat from "dateformat";

export class XNOS {
    private _v: Date = null;

    constructor() {
        this._v = new Date();
    }

    get y() {
        return this._v?.getFullYear();
    }

    set y(year) {
        this._v?.setFullYear(year);
    }

    get m() {
        return this._v?.getMonth();
    }

    set m(month) {
        this._v?.setMonth(month);
    }

    get d() {
        return this._v?.getDate();
    }

    set d(date) {
        this._v?.setDate(date);
    }

    get h() {
        return this._v?.getHours();
    }

    set h(hours) {
        this._v?.setHours(hours);
    }

    get M() {
        return this._v?.getMinutes();
    }

    set M(min) {
        this._v?.setMinutes(min);
    }

    get s() {
        return this._v?.getSeconds();
    }

    set s(sec) {
        this._v?.setSeconds(sec);
    }

    get ms() {
        return this._v?.getMilliseconds();
    }

    set ms(ms) {
        this._v?.setMilliseconds(ms);
    }

    get t() {
        return this._v?.getTime();
    }

    set t(time) {
        this._v?.setTime(time);
    }

    format(mask: string) {
        return dateFormat(this._v, mask);
    }
}

export namespace XNOS {

}