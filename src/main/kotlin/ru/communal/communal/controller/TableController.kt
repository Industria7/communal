package ru.communal.communal.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpSession

/**
 * @author osadchiy.ia
 */
@Controller
class TableController {

    @GetMapping("/table")
    fun tableGet(model: Model, session: HttpSession): String {
        return "table"
    }
}