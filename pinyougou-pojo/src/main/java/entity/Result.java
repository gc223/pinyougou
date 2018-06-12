package entity;

import java.io.Serializable;

public class Result implements Serializable {
    private static final long serialVersionUID = -5610943970989205404L;
    private boolean success;
    private String msg;

    public Result() {
    }

    public Result(boolean success, String msg) {
        this.success = success;
        this.msg = msg;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
