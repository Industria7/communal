package ru.communal.communal

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

/**
 * @author osadchiy.ia
 */
@SpringBootApplication
@ComponentScan
open class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
