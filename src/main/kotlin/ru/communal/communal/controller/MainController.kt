package ru.communal.communal.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpSession

/**
 * @author osadchiy.ia
 */
@Controller
class MainController {

    @GetMapping("/main")
    fun main(model: Model, session: HttpSession): String {
            return "main"
    }
}

/*
* fun main(model: Model, session: HttpSession): String {
        return if (checkAuthUser(session)) {
            authFailRedirectPath()
        } else {
            var youngerGroup = 0
            var seniorGroup = 0
            var childrenCount = 0

            when {
                checkUserRole(Role.KINDERGARTEN, session) -> {
                    val children = getUserKindergarten(session)?.let { childrenService.getAllChildren(it) }

                    if (children != null) {
                        childrenCount += children.count()
                    }

                    if (children != null)
                        for (child in children) {
                            if (child.getAge() < 3) {
                                youngerGroup++
                            } else {
                                seniorGroup++
                            }
                        }
                }
                checkUserRole(Role.ADMINISTRATION, session) -> {
                    val kindergartens = kindergartenService.getAll()

                    for (kindergarten in kindergartens) {
                        val children = childrenService.getAllChildren(kindergarten)

                        childrenCount += children.count()

                        for (child in children) {

                            if (child.getAge() < 3) {
                                youngerGroup++
                            } else {
                                seniorGroup++
                            }
                        }
                    }

                }
                else -> {
                    return authFailRedirectPath()
                }
            }

            model.addAttribute("roles", getUserRoles(session))

            model.addAttribute("childrenCount", childrenCount)
            model.addAttribute("youngerGroup", youngerGroup)
            model.addAttribute("seniorGroup", seniorGroup)
            return "main"
        }
    }
* */