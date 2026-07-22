package core

type LatchshotScreenshotError struct {
	IsLatchshotScreenshotError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewLatchshotScreenshotError(code string, msg string, ctx *Context) *LatchshotScreenshotError {
	return &LatchshotScreenshotError{
		IsLatchshotScreenshotError: true,
		Sdk:              "LatchshotScreenshot",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *LatchshotScreenshotError) Error() string {
	return e.Msg
}
