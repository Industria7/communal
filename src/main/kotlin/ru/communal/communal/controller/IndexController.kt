package ru.communal.communal.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpSession

/**
 * @author osadchiy.ia
 */
@Controller
class IndexController {

    @GetMapping("/")
    fun rootGet(model: Model, session: HttpSession): String {
        return "index"
    }

    @GetMapping("/index")
    fun indexGet(model: Model, session: HttpSession): String {
        return "index"
    }
}