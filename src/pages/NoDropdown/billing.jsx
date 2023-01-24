import React from 'react';
const Billing = () => {
    return (
        <>
            <h3>billing page</h3>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Deal Billing</label>
                <input class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Bills</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    );
}

export default Billing;