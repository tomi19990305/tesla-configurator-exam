import { SubSink } from 'subsink';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
    subs: SubSink = new SubSink();

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
